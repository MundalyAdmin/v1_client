// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-become-a-participant',
  templateUrl: './become-a-participant.component.html',
  styleUrls: ['./become-a-participant.component.scss'],
})
export class BecomeAParticipantComponent implements OnInit {
  ngOnInit(): void {
    var ifr: any = document.getElementById('JotFormIFrame-240804542395558');
    if (ifr) {
      var src = ifr.src;
      var iframeParams: any[] = [];
      if (window.location.href && window.location.href.indexOf('?') > -1) {
        iframeParams = iframeParams.concat(
          window.location.href
            .substr(window.location.href.indexOf('?') + 1)
            .split('&')
        );
      }
      if (src && src.indexOf('?') > -1) {
        iframeParams = iframeParams.concat(
          src.substr(src.indexOf('?') + 1).split('&')
        );
        src = src.substr(0, src.indexOf('?'));
      }
      iframeParams.push('isIframeEmbed=1');
      ifr.src = src + '?' + iframeParams.join('&');
    }
    // @ts-expect-error
    window.handleIFrameMessage = function (e) {
      if (typeof e.data === 'object') {
        return;
      }
      var args = e.data.split(':');
      let iframe: any;
      if (args.length > 2) {
        iframe = document.getElementById(
          'JotFormIFrame-' + args[args.length - 1]
        );
      } else {
        iframe = document.getElementById('JotFormIFrame');
      }
      if (!iframe) {
        return;
      }
      switch (args[0]) {
        case 'scrollIntoView':
          iframe.scrollIntoView();
          break;
        case 'setHeight':
          iframe.style.height = args[1] + 'px';
          if (
            !isNaN(args[1]) &&
            parseInt(iframe.style.minHeight) > parseInt(args[1])
          ) {
            iframe.style.minHeight = args[1] + 'px';
          }
          break;
        case 'collapseErrorPage':
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + 'px';
          }
          break;
        case 'reloadPage':
          window.location.reload();
          break;
        case 'loadScript':
          if (!window.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) {
            break;
          }
          var src = args[1];
          if (args.length > 3) {
            src = args[1] + ':' + args[2];
          }
          var script = document.createElement('script');
          script.src = src;
          script.type = 'text/javascript';
          document.body.appendChild(script);
          break;
        case 'exitFullscreen':
          if (window.document.exitFullscreen) window.document.exitFullscreen();
          else if (window.document.mozCancelFullScreen)
            window.document.mozCancelFullScreen();
          else if (window.document.mozCancelFullscreen)
            window.document.mozCancelFullScreen();
          else if (window.document.webkitExitFullscreen)
            window.document.webkitExitFullscreen();
          else if (window.document.msExitFullscreen)
            window.document.msExitFullscreen();
          break;
      }
      var isJotForm = e.origin.indexOf('jotform') > -1 ? true : false;
      if (
        isJotForm &&
        'contentWindow' in iframe &&
        'postMessage' in iframe.contentWindow
      ) {
        var urls = {
          docurl: encodeURIComponent(document.URL),
          referrer: encodeURIComponent(document.referrer),
        };
        iframe.contentWindow.postMessage(
          JSON.stringify({ type: 'urls', value: urls }),
          '*'
        );
      }
    };
    window.isPermitted = function (originUrl, whitelisted_domains) {
      var url = document.createElement('a');
      url.href = originUrl;
      var hostname = url.hostname;
      var result = false;
      if (typeof hostname !== 'undefined') {
        whitelisted_domains.forEach(function (element) {
          if (
            hostname.slice(-1 * element.length - 1) === '.'.concat(element) ||
            hostname === element
          ) {
            result = true;
          }
        });
        return result;
      }
    };
    if (window.addEventListener) {
      window.addEventListener('message', handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent('onmessage', handleIFrameMessage);
    }
  }
}
