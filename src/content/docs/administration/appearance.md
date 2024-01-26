---
title: Appearance
description: Learn the 'White Label' options for your Daytona Instance.
sidebar:
  label: Appearance
---
Daytona has the ability to provide White Labeling as per company requirements. This means that you can add your own ‘look and feel’/company branding, presenting a unified environment and giving users a more seamless experience across your other internal tools.


- To White Label Daytona, first, you need to create a container image which holds the required branded assets.
- To create the image, please create a directory and file structure as so 



- Then create a container image from the Dockerfile content provided below:

---
FROM busybox


```
COPY packages/branding/dashboard /branding/dashboard/
COPY packages/branding/workspace-status /branding/workspace-status/
COPY packages/branding/workspace-proxy/ /branding/workspace-proxy/
COPY packages/branding/email-service/ /branding/email-service/
COPY apps/docs/public/branding /branding/docs/

```





- Push the image into a public or private registry. Now you have a branding image prepared to be used in Daytona.




:::note
To White Label your installation, please contact your sales representative to add White Labeling as a term of your license. White Labeling Daytona without written approval from us is prohibited by our License Agreement..
 :::