# Puppeteer on Deta

![GitHub](https://img.shields.io/github/license/StefanZoneExamples/deta-puppeteer)

Example project to demonstrate how to use [Puppeteer](https://pptr.dev) on [Deta](https://deta.sh).

## Found a bug? 👷‍

Thanks for letting me know! Please [file an issue](../../issues/new?assignees=&labels=&template=bug_report.md&title=) and I should reply shortly.

## Deploy the project 🚀

Follow the steps to deploy the project to Deta.

### Clone the repo

```bash
git clone https://github.com/StefanZoneExamples/deta-puppeteer.git
cd deta-puppeteer
```

### Create new Deta Micro

```bash
deta new --node
```

### Create `.env`

```bash
cp .env.example .env
```

### Update environment variables

```bash
deta update -e .env
```

> **Note:** Note: Deta Micros time out after 10 seconds. If the screenshot has not been returned by then, please reload the page and try again.

## Update the project 🖊️

If you have made changes and want to deploy them to Deta, run the following command.

```bash
deta deploy
```
