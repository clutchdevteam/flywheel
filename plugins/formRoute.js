/*
  Usage:
  To join parts of a route, call formRoute with arguments:
  - url: the internal route
  - anchor: if needed, the id of an anchor on a page. Adds the '#' automatically.
  - tracking: if needed, additional tracking information to be added to the end of the route. Adds the '?' automatically.
*/

export default ({ app }, inject) => {
  inject('formRoute', (urlData) => {
    let url = urlData.url
    // if url starts with 'pages/' remove from url
    // can remove if the Storyblok Advanced Routes plugin is used
    if (url.startsWith('pages/')) {
      url = url.replace('pages/', '')
    }
    if (!url.startsWith('http')) {
      url = '/' + url
    }

    let anchor
    if (urlData.anchor) {
      anchor = '#' + urlData.anchor
    } else {
      anchor = ''
    }
    return url + anchor
  })
}
