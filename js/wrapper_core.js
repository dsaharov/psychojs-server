import * as core from './_core.js';

const _closeSession = core.ServerManager.prototype.closeSession;
core.ServerManager.prototype.closeSession = function(isCompleted = false) {
  let self = this;
  return _closeSession.apply(self, arguments).then(
    (result) => {
      if(result.data && result.data.url){
        self._psychoJS.setRedirectUrls(result.data.url, result.data.url);
      }
    }
  )
};

export let {
  EventManager,
  BuilderKeyResponse,
  GUI,
  MinimalStim,
  Mouse,
  PsychoJS,
  ServerManager,
  Window,
  WindowMixin
} = core;
