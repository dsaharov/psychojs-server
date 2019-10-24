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

const _uploadData = core.ServerManager.prototype.uploadData;
core.ServerManager.prototype.uploadData = function(key, value) {
  let self = this;
  let args = arguments;
  return _uploadData.apply(
    self, ['_exp_info', JSON.stringify(self._psychoJS._experiment.extraInfo)]
  ).then(function() {
    return _uploadData.apply(self, args);
  });
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
