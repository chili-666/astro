---
title: 'Selfhosted Stuff'
pubDate: 2022-07-01
description: 'Things I host on my server'
author: 'me'
image:
    url: ''
    alt: ''
tags: ["linux", "software"]
---
https://github.com/dani-garcia/vaultwarden
https://portainer.io/
https://github.com/binwiederhier/ntfy
https://hay-kot.github.io/mealie/
https://hub.docker.com/_/elasticsearch




https://www.os-js.org/
https://github.com/pawelmalak/flame
https://github.com/ashwin-pc/hiccup
https://appwrite.io/

## CertBot / Nginx
```bash
sudo cp /etc/nginx/sites-available/code-server /etc/nginx/sites-available/mealie

sudo nano /etc/nginx/sites-available/mealie

sudo ln -s ../sites-available/mealie /etc/nginx/sites-enabled/mealie

sudo certbot --non-interactive --redirect --agree-tos --nginx -d mealie.my-little-unicorn.de -m luis.waesler@gmail.com

```

85.214.39.115

GitHub autocommit batch
https://stackoverflow.com/questions/53078484/how-to-auto-commit-and-push-on-github
