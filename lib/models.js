class User {

  /**
   * 
   * @param {number} id 
   * @param {string} username 
   * @param {boolean} enabled 
   * @param {string} twitterName 
   * @param {string} discordName 
   * @param {string} twitchName 
   */
  constructor(id, username, enabled, twitterName, discordName, twitchName) {
    this.id = id;
    this.username = username;
    this.enabled = enabled;
    this.twitterName = twitterName;
    this.discordName = discordName;
    this.twitchName = twitchName;
  }
}

class Marathon {
  /**
   * 
   * @param {string} id Id of marathon
   * @param {string} name The name of the marathon
   * @param {User} creator Creator of marathon
   * @param {string} startDate Start date of marathon
   * @param {string} endDate End date of marathon
   * @param {string} submissionsStartDate Submission start date of marathon
   * @param {string} submissionsEndDate Submission end date of marathon
   * @param {string} description Description of marathon
   * @param {string} location Checks marathon location
   * @param {string} language Checks marathon language
   * @param {number} maxGamesPerRunner Max number of games per runner
   * @param {number} maxCategoriesPerGame Max number of categories per game
   * @param {boolean} hasMultiplayer Checks if the marathons has multiplayer
   * @param {string} twitch Twitch name of the marathon
   * @param {string} twitter Twitter of the marathon
   * @param {string} discord Discord of the marathon
   * @param {string} country Country where places the marathon (if it is not online)
   * @param {boolean} submitsOpen Checks if submits are open
   * @param {string} defaultSetupTime Setup time for runs
   * @param {boolean} selectionDone Checks if selection is completed
   * @param {boolean} scheduleDone Checks if schedule is completed
   * @param {boolean} donationsOpen Checks if the marathons has donations open
   * @param {boolean} isPrivate Checks if the marathons is private
   * @param {boolean} emulatorAuthorized Checks if emulators are authorized
   * @param {[User]} moderators Array of users that are moderators
   * @param {boolean} hasIncentives Checks if the marathons has incentives
   * @param {boolean} hasDonations Checks if the marathons has donations
   * @param {string} payee Paypal email of charity organization
   * @param {string} supportedCharity Organization that will receive our support
   * @param {string} donationCurrency Currency of donations
   * @param {string} youtube Youtube of the marathon
   * @param {number} donationsTotal Total amount of donations
   */
  constructor(id, name, creator, startDate, endDate, submissionsStartDate, submissionsEndDate,
    description, location, language, maxGamesPerRunner, maxCategoriesPerGame, hasMultiplayer,
    twitch, twitter, discord, country, submitsOpen, defaultSetupTime, selectionDone, scheduleDone,
    donationsOpen, isPrivate, emulatorAuthorized, moderators, hasIncentives, hasDonations, payee,
    supportedCharity, donationCurrency, youtube, donationsTotal) {

    this.id = id;
    this.name = name;
    this.creator = creator;
    this.startDate = startDate;
    this.endDate = endDate;
    this.submissionsStartDate = submissionsStartDate;
    this.submissionsEndDate = submissionsEndDate;
    this.description = description;
    this.location = location;
    this.language = language;
    this.maxGamesPerRunner = maxGamesPerRunner;
    this.maxCategoriesPerGame = maxCategoriesPerGame;
    this.hasMultiplayer = hasMultiplayer;
    this.twitch = twitch;
    this.twitter = twitter;
    this.discord = discord;
    this.country = country;
    this.submitsOpen = submitsOpen;
    this.defaultSetupTime = defaultSetupTime;
    this.selectionDone = selectionDone;
    this.scheduleDone = scheduleDone;
    this.donationsOpen = donationsOpen;
    this.isPrivate = isPrivate;
    this.emulatorAuthorized = emulatorAuthorized;
    this.moderators = moderators;
    this.hasIncentives = hasIncentives;
    this.hasDonations = hasDonations;
    this.payee = payee;
    this.supportedCharity = supportedCharity;
    this.donationCurrency = donationCurrency;
    this.youtube = youtube;
    this.donationsTotal = donationsTotal;
  }
}

class ScheduleLine {
  /**
   * 
   * @param {number} categoryId 
   * @param {string} categoryName 
   * @param {string} console 
   * @param {boolean} customRun 
   * @param {string} date 
   * @param {boolean} emulated 
   * @param {string} estimate 
   * @param {string} gameName 
   * @param {number} id 
   * @param {number} position 
   * @param {string} ratio 
   * @param {[User]} runners 
   * @param {boolean} setupBlock
   * @param {string} setupBlockText
   * @param {string} setupTime
   * @param {string} type
   */
  constructor(categoryId, categoryName, console, customRun, date, emulated, estimate, gameName, id, position, ratio, runners, setupBlock, setupBlockText, setupTime, type) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.console = console;
    this.customRun = customRun;
    this.date = date;
    this.emulated = emulated;
    this.estimate = estimate;
    this.gameName = gameName;
    this.id = id;
    this.position = position;
    this.ratio = ratio;
    this.runners = runners;
    this.setupBlock = setupBlock;
    this.setupBlockText = setupBlockText;
    this.setupTime = setupTime;
    this.type = type;
  }
}

class Schedule {
  /**
   * 
   * @param {number} id 
   * @param {[ScheduleLine]} lines 
   */
  constructor(id, lines) {
    this.id = id;
    this.lines = lines;
  }
}

class Bid {
  /**
   * 
   * @param {boolean} approved 
   * @param {number} currentAmount 
   * @param {number} id 
   * @param {number} incentiveId 
   * @param {string} name 
   */
  constructor(approved, currentAmount, id, incentiveId, name) {
    this.approved = approved;
    this.currentAmount = currentAmount;
    this.id = id;
    this.incentiveId = incentiveId;
    this.name = name;
  }
}

class Incentive {

  /**
   * 
   * @param {boolean} bidWar 
   * @param {[Bid]} bids 
   * @param {number} currentAmount 
   * @param {string} description 
   * @param {number} goal 
   * @param {number} id 
   * @param {boolean} locked 
   * @param {string} name 
   * @param {boolean} openBid 
   * @param {ScheduleLine} scheduleLine 
   */
  constructor(bidWar, bids, currentAmount, description, goal, id, locked, name, openBid, scheduleLine) {
    this.bidWar = bidWar;
    this.bids = bids;
    this.currentAmount = currentAmount;
    this.description = description;
    this.goal = goal;
    this.id = id;
    this.locked = locked;
    this.name = name;
    this.openBid = openBid;
    this.scheduleLine = scheduleLine;
  }
}

class MarathonDonationStats{ 

  /**
   * 
   * @param {number} average 
   * @param {number} count 
   * @param {number} max 
   * @param {number} total 
   */
  constructor(average, count, max, total){
    this.average = average;
    this.count = count;
    this.max = max;
    this.total = total;
  }
}

class Donation{
  /**
   * 
   * @param {number} id 
   * @param {string} nickname 
   * @param {string} donationDate 
   * @param {number} amount 
   * @param {string} donationComment 
   * @param {boolean} approved 
   */
  constructor(id, nickname, donationDate, amount, donationComment, approved){
    this.id = id;
    this.nickname = nickname;
    this.donationDate = donationDate;
    this.amount = amount;
    this.donationComment = donationComment;
    this.approved = approved;
  }
}



module.exports = {User, Marathon, ScheduleLine, Schedule, Bid, Incentive, Donation, MarathonDonationStats}