# Nest.jsを触ってみる

## アプリの起動

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 動作確認

```bash
# HTTPieがインストールされていること
$ http -v :8002

$ http -v POST :8002/users 

$ http -v POST :8002/users name=John email=john@example.org

```

## テスト実行

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
