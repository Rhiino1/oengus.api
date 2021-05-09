const get = require('../lib/api')
const {
  isUser,
  isMarathon,
  isBid,
  isIncentive,
  isSchedule,
  isMarathonDonationStats,
  isDonation
} = require('../lib/comparators')
const {
  User,
  Marathon,
  ScheduleLine,
  Schedule,
  Bid,
  Incentive,
  MarathonDonationStats,
  Donation
} = require('../lib/models')


/**
 * 
 * @param {string} id name/id of the marathon
 * @returns {Marathon} Marathon instance
 */
const getMarathon = async (id) => {
  const response = await get(`marathons/${id}`);
  if (isMarathon(response.data)) {
    const data = response.data;
    const moderators = data.moderators.map(moderator => {
      return new User(moderator.id, moderator.username, moderator.enabled, moderator.twitterName, moderator.discordName, moderator.twitchName)
    })
    return new Marathon(data.id, data.name, data.creator, data.startDate, data.endDate, data.submissionsStartDate, data.submissionsEndDate, data.description, data.location, data.language, data.maxGamesPerRunner, data.maxCategoriesPerGame, data.hasMultiplayer, data.twitch, data.twitter, data.discord, data.country, data.submitsOpen, data.defaultSetupTime, data.selectionDone, data.scheduleDone, data.donationsOpen, data.isPrivate, data.emulatorAuthorized, moderators, data.hasIncentives, data.hasDonations, data.payee, data.supportedCharity, data.donationCurrency, data.youtube, data.donationsTotal);
  }
  throw new Error('Response could not parse Marathon.');
}

/**
 * 
 * @param {string} username username from oengus
 * @returns {User} User instance
 */
const getUser = async (username) => {
  const response = await get(`users/${username}`);
  if (isUser(response.data)) {
    const data = response.data;
    return new User(data.id, data.username, data.enabled, data.twitterName, data.discordName, data.twitchName)
  }
  throw new Error('Response could not parse User.');
}

/**
 * 
 * @param {string} id name/id of the marathon
 * @returns {Schedule} Schedule instance
 */
const getSchedule = async (id) => {
  const response = await get(`marathons/${id}/schedule`);
  if (isSchedule(response.data)) {
    const data = response.data;
    const lines = data.lines.map((line) => {
      if (!data.lines.runners) {
        return new ScheduleLine(line.categoryId, line.categoryName, line.console, line.customRun, line.date, line.emulated, line.estimate, line.gameName, line.id, line.position, line.ratio, [], line.setupBlock, line.setupBlockText, line.setupTime, line.type)
      }
      const runners = data.lines.runners.map((runner) => {
        return new User(runner.id, runner.username, runner.enabled, runner.twitterName, runner.discordName, runner.twitchName)
      });
      return new ScheduleLine(line.categoryId, line.categoryName, line.console, line.customRun, line.date, line.emulated, line.estimate, line.gameName, line.id, line.position, line.ratio, runners, line.setupBlock, line.setupBlockText, line.setupTime, line.type)
    });
    return new Schedule(data.id, lines)
  }
}

/**
 * 
 * @param {string} id name/id of the marathon
 * @returns {[Incentive]} Array of incentives instances
 */
const getIncentives = async (id) => {
  const response = await get(`marathons/${id}/incentives`);

  return response.data.map(incentive => {
    if (isIncentive(incentive)) {
      const bids = incentive.bids.map(bid => {
        if (isBid(bid)) {
          return new Bid(bid.approved, bid.currentAmount, bid.id, bid.incentiveId, bid.name)
        }
      });
      const runners = incentive.scheduleLine.runners.map((runner) => {
        return new User(runner.id, runner.username, runner.enabled, runner.twitterName, runner.discordName, runner.twitchName)
      });
      const line = new ScheduleLine(incentive.scheduleLine.categoryId, incentive.scheduleLine.categoryName, incentive.scheduleLine.console, incentive.scheduleLine.customRun, incentive.scheduleLine.date, incentive.scheduleLine.emulated, incentive.scheduleLine.estimate, incentive.scheduleLine.gameName, incentive.scheduleLine.id, incentive.scheduleLine.position, incentive.scheduleLine.ratio, runners, incentive.scheduleLine.setupBlock, incentive.scheduleLine.setupBlockText, incentive.scheduleLine.setupTime, incentive.scheduleLine.type)
      return new Incentive(incentive.bidWar, bids, incentive.currentAmount, incentive.description, incentive.goal, incentive.id, incentive.locked, incentive.name, incentive.openBid, line);
    }
    throw new Error(`Response could not parse Incentives. Incentive[${incentive.id}]`);
  })
}

/**
 * 
 * @param {string} id name/id of the marathon
 * @returns {object} Stats from the marathon
 */
const getMarathonDonationStats = async (id) => {
  const response = await get(`marathons/${id}/donations/stats`);

  if (isMarathonDonationStats(response.data)) {
    const data = response.data;
    return new MarathonDonationStats(data.average, data.count, data.max, data.total);
  }
  throw new Error('Response could not parse Stats.');
}

/**
 * 
 * @param {string} id name/id of the marathon
 * @param {number} page number of page to show starting from 0
 * @param {*} size number of donations to show
 * @returns {[Donation]} Donations array from the marathon
 */
const getDonationPage = async (id, page, size) => {
  const response = await get(`marathons/${id}/donations?page=${page}&size=${size}`);

  return response.data.content.map(donation => {
    if (isDonation(donation)) {
      return new Donation(donation.id, donation.nickname, donation.date, donation.amount, donation.comment, donation.donationIncentiveLinks);
    }
    throw new Error(`Response could not parse Donations. Donation[${donation.id}]`);
  })
}

module.exports = {
  getUser,
  getMarathon,
  getSchedule,
  getIncentives,
  getMarathonDonationStats,
  getDonationPage
}