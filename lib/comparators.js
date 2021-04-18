/**
 * 
 * @param {Object} data Data from GET request
 * @returns {boolean} True if data is a valid marathon, otherwise returns false
 */
const isMarathon = (data) => {
  if (
    (!data.id || typeof data.id !== 'string') ||
    (!data.name || typeof data.name !== 'string') ||
    (!data.creator || !isUser(data.creator)) ||
    (!data.startDate || typeof data.startDate !== 'string') ||
    (!data.endDate || typeof data.endDate !== 'string') ||
    (data.location && typeof data.location !== 'string') ||
    (!data.language || typeof data.language !== 'string') ||
    (!data.maxGamesPerRunner || typeof data.maxGamesPerRunner !== 'number') ||
    (!data.maxCategoriesPerGame || typeof data.maxCategoriesPerGame !== 'number') ||
    (typeof data.hasMultiplayer !== 'boolean') ||
    (data.twitch && typeof data.twitch !== 'string') ||
    (data.twitter && typeof data.twitter !== 'string') ||
    (data.discord && typeof data.discord !== 'string') ||
    (data.location && typeof data.location !== 'string') ||
    (typeof data.submitsOpen !== 'boolean') ||
    (!data.defaultSetupTime || typeof data.defaultSetupTime !== 'string') ||
    (typeof data.selectionDone !== 'boolean') ||
    (typeof data.scheduleDone !== 'boolean') ||
    (typeof data.donationsOpen !== 'boolean') ||
    (typeof data.isPrivate !== 'boolean') ||
    (typeof data.emulatorAuthorized !== 'boolean') ||
    (typeof data.hasIncentives !== 'boolean') ||
    (typeof data.hasDonations !== 'boolean') ||
    (data.payee && typeof data.payee !== 'string') ||
    (data.supportedCharity && typeof data.supportedCharity !== 'string') ||
    (data.donationCurrency && typeof data.donationCurrency !== 'string') ||
    (data.youtube && typeof data.youtube !== 'string')
  ) {
    console.error(`Marathon[${data.id}] could not be parsed from request.`);
    return false;
  }

  if (!data.moderators || typeof data.moderators !== 'object' ||
    data.moderators.find(user => {
      return !isUser(user);
    }) !== undefined) {
    console.error(`Marathon[${data.id}] could not be parsed from request. Error parsing moderators.`);
    return false;
  }
  return true;
}

/**
 * 
 * @param {Object} data Data from GET request
 * @returns {boolean} True if data is a valid user, otherwise returns false
 */
const isUser = (data) => {
  if (
    (!data.id || typeof data.id !== 'number') ||
    (!data.username || typeof data.username !== 'string') ||
    (typeof data.enabled !== 'boolean') ||
    (data.twitterName && typeof data.twitterName !== 'string') ||
    (data.discordName && typeof data.discordName !== 'string') ||
    (data.twitchName && typeof data.twitchName !== 'string')
  ) {
    console.error(`User[${data.id}] could not be parsed from request.`);
    return false;
  }
  return true;
}

/**
 * 
 * @param {Object} data Data from GET request
 * @returns {boolean} True if data is a valid scheduleLine, otherwise returns false
 */
const isScheduleLine = (data) => {
  if (
    (data.id === undefined || typeof data.id !== 'number') ||
    (data.gameName && typeof data.gameName !== 'string') ||
    (data.console && typeof data.console !== 'string') ||
    (typeof data.emulated !== 'boolean') ||
    (data.ratio && typeof data.ratio !== 'string') ||
    (data.categoryName && typeof data.categoryName !== 'string') ||
    (!data.estimate || typeof data.estimate !== 'string') ||
    (!data.setupTime || typeof data.setupTime !== 'string') ||
    (typeof data.setupBlock !== 'boolean') ||
    (typeof data.customRun !== 'boolean') ||
    (typeof data.position !== 'number') ||
    (data.categoryId && typeof data.categoryId !== 'number') ||
    (!data.type || typeof data.type !== 'string') ||
    (data.setupBlockText && typeof data.setupBlockText !== 'string') ||
    (!data.date || typeof data.date !== 'string')
  ) {
    console.error(`ScheduleLine[${data.id}] could not be parsed from request.`);
    return false;
  }

  if (!data.runners || typeof data.runners !== 'object' ||
    data.runners.find(user => {
      return !isUser(user);
    }) !== undefined) {
    console.error(`ScheduleLine[${data.id}] could not be parsed from request. Error parsing moderators.`);
    return false;
  }
  return true;
}

/**
 * 
 * @param {Object} data Data from GET request
 * @returns {boolean} True if data is a valid bid, otherwise returns false
 */
const isBid = (data) => {
  if (
    (typeof data.approved !== 'boolean') ||
    (!data.currentAmount || typeof data.currentAmount !== 'number') ||
    (!data.id || typeof data.id !== 'number') ||
    (!data.incentiveId || typeof data.incentiveId !== 'number') ||
    (!data.name || typeof data.name !== 'string')
  ) {
    console.error(`Bid[${data.id}] could not be parsed from request.`);
    return false;
  }
  return true;
}

/**
 * 
 * @param {Object} data Data from GET request
 * @returns {boolean} True if data is a valid incentive, otherwise returns false
 */
const isIncentive = (data) => {
  if (
    (data.bidWar && typeof data.bidWar !== 'boolean') ||
    (data.currentAmount && typeof data.currentAmount !== 'number') ||
    (!data.description || typeof data.description !== 'string') ||
    (!data.goal || typeof data.goal !== 'number') ||
    (!data.id || typeof data.id !== 'number') ||
    (typeof data.locked !== 'boolean') ||
    (!data.name || typeof data.name !== 'string') ||
    (typeof data.openBid !== 'boolean') ||
    (!data.scheduleLine || isScheduleLine(data.scheduleLine))
  ) {
    console.error(`Incentive[${data.id}] could not be parsed from request.`);
    return false;
  }
  return true;
}

/**
 * 
 * @param {Object} data Data from GET request
 * @returns {boolean} True if data is a valid schedule, otherwise returns false
 */
const isSchedule = (data) => {
  if (
    (!data.id || typeof data.id !== 'number') ||
    (!data.lines || typeof data.lines !== 'object' ||
      data.lines.find(line => {
        return !isScheduleLine(line);
      }) !== undefined)) {
    console.error(`Schedule[${data.id}] could not be parsed from request.`);
    return false;
  }
  return true;
}

const isMarathonDonationStats = (data) => {
  if (
    (typeof data.average !== 'number') ||
    (typeof data.max !== 'number') ||
    (typeof data.count !== 'number') ||
    (typeof data.total !== 'number') 
  ) {
    console.error(`Stats could not be parsed from request.`);
    return false;
  }
  return true;
}

const isDonation = (data) => {
  if (
    (typeof data.id !== 'number') ||
    (!data.nickname || typeof data.nickname !== 'string') ||
    (!data.donationDate || typeof data.donationDate !== 'string') ||
    (typeof data.amount !== 'number') ||
    (!data.donationComment || typeof data.donationComment !== 'string') ||
    (typeof data.approved !== 'boolean')
  ) {
    console.error(`Donation[${data.id}] could not be parsed from request.`);
    return false;
  }
  return true;
}

module.exports = {
  isUser,
  isMarathon,
  isBid,
  isIncentive,
  isSchedule,
  isMarathonDonationStats,
  isDonation
}