# Google-Assistant
Google assistant test using google home mini

Reference [youtube](https://youtu.be/_oKhSWnGCFM) and [stackoverflow](https://stackoverflow.com/a/55143483/7270469)

## What is OAuth?

OAuth is kind of `Authorization`.

Simply get authorized key between service and other service.

```
        Limited access permission
   Bank <-------------------------- App
    ^ <- Each different services ->  ^
    |                                |
    |                                |
    ME ------------------------------┛
      Want send money insted of go to bank
```

1. `App` will ask to `Bank`. Such as `Can i send ME's money to B?`
2. Then `Bank` says to `Me` is it okay to grant permission to `App`?
3. If `Me` says okay, then `Bank` return limited permission key (token) to `App`
4. `App` will request some order, in this case `Send ME's money to B` with token
5. `Bank` will verify token and execute order.

## How to

1. Go to [Actions on Google](https://console.actions.google.com/)

<div align="center">
  <img width="512" alt="스크린샷 2021-11-04 오전 12 50 54" src="https://user-images.githubusercontent.com/16532326/140095087-21da8445-62f4-4929-b7f3-ccbfe3a1f274.png">
</div>

2. Create new project.

<div align="center">
<img width="512" alt="스크린샷 2021-11-04 오전 1 30 46" src="https://user-images.githubusercontent.com/16532326/140102510-f2353883-a59c-4df1-95cd-cff9144760c2.png">
</div>
  
3. Select `Smart Home` and press `Start building` button.

<div align="center">
  <img width="512" alt="스크린샷 2021-11-04 오전 12 56 42" src="https://user-images.githubusercontent.com/16532326/140096092-e04535ca-7821-421c-bd60-bb8a4415daf8.png">
</div>
  
4. Select project what we recently made.

<div align="center">
<img width="379" alt="스크린샷 2021-11-04 오전 1 33 03" src="https://user-images.githubusercontent.com/16532326/140102973-ef932eb8-4e26-4ed1-8685-690cca3c19bd.png">

  <img width="317" alt="스크린샷 2021-11-04 오전 12 58 10" src="https://user-images.githubusercontent.com/16532326/140096387-f65c3df2-083b-4500-b44c-ac85c8149288.png">
</div>
  
5. Add language what you will use `Triple dots` > `Project settings` > `Language tap`

<div align="center">
<img width="512" alt="스크린샷 2021-11-04 오전 1 36 23" src="https://user-images.githubusercontent.com/16532326/140103386-87d45366-7398-46f8-b1f1-70ac8a0c9719.png">
</div>

6. Go to `Develop tap` > `Invocation menu`. Set what world to wake up your assistant. In my case set `Hey, siri!` :D


