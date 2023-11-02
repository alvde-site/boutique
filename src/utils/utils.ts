export const mainElement = document.getElementsByClassName("main")[0];

export const handleToElementScroll = (el: any) => {
  if (el) {
    el?.scrollIntoView({ behavior: "smooth" });
  }
};
