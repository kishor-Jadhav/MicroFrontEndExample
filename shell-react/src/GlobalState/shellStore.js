export const shellStore = {
  data: {}
};

window.shellStore = shellStore;

export const setData = (data) => {
  shellStore.data = data;

  window.dispatchEvent(
    new CustomEvent("shell:data-updated", {
      detail: shellStore.data
    })
  );
};

export const getData = () => shellStore.data;