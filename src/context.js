import * as cron from 'cron';

const CronJob = cron.CronJob;

const job = new CronJob(
  '* * * * * *',
  function() {
    console.log('I am the job');
  },
  null,
  false,
  'America/Los_Angeles'
);

let instance = null;
export default class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this.job = job;
    return instance;
  }
}
