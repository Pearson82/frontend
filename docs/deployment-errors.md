
## What to do when a deployment breaks

```
com.amazonaws.AmazonServiceException Status Code: 400, AWS Service:
AmazonAutoScaling, AWS Request ID: e7abc4ec-8518-11e3-b64f-13b3661c52c1,
AWS Error Code: ValidationError, AWS Error Message: Currently,
desiredSize equals minSize (1). Terminating instance without replacement
will violate group's min size constraint. Either set
shouldDecrementDesiredCapacity flag to false or lower group's min size.
Show exception details
```

- ? 

```
java.lang.RuntimeException Autoscaling group does not have the capacity
to deploy current max = 2 - desired max = 4 Show exception details
```

- A previous deployment has failed to scale down the infrastructure.
- You need to scale down the autoscale group so it's got room to add your servers, Eg, `gu groups update <group> 3 3 6`

```
com.amazonaws.AmazonServiceException Status Code: 400, AWS Service:
AmazonElasticLoadBalancing, AWS Request ID:
fad7ad53-8516-11e3-a6c5-937056a56545,
```

- ? 

```
AWS Error Code: Throttling, AWS Error Message: Rate exceeded Show
exception details
```

- We've exceeded our AWS rate-limit.
- Wait 5 minutes and re-deploy.

```
java.lang.RuntimeException Check failed to pass within 1200000
milliseconds (tried 41 times) - aborting Show exception details
```

- A box (or several boxes) has failed to launch and pass it's healthcheck.
- Potentially you've released something that means the box can't be
  started or added to the load balancers. 
- Log on to the box and have a look in the boot-up logs.
- Ultimately, you'll probably need to check the size of the autoscale group and
  redeploy, but don't do this without understanding why it failed.

```
deployment.DeployStoppedException Deploy has been stopped by Matt
Chadburn Show exception details
```

- Someone stopped your build manually.
- If that person isn't you then go and talk to them.

```
java.lang.ExceptionInInitializerError Show exception details
```

- ?

```
com.amazonaws.services.s3.model.AmazonS3Exception Status Code: 400, AWS
Service: Amazon S3, AWS Request ID: 292408DD7D4DBAD1, AWS Error Code:
RequestTimeout, AWS Error Message: Your socket connection to the server
was not read from or written to within the timeout period. Idle
connections will be closed. Show exception details
```

- ?