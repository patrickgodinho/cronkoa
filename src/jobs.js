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

export default {
  job1: job,
};
