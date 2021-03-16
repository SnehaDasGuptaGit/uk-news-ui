# uk-news-ui

To Start the UI -> gulp start.
If the gulp start fails with primodial not defined add the below code to npm-shrinkwrap.json and do an npm install.
{
  "dependencies": {
    "graceful-fs": {
      "version": "4.2.2"
    }
  }
}
The API server also should be started.

On Page load we have the list of top headline of UK.
On Filter of a particular keyword the news with that keyword is present.