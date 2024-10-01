setInterval(() => {
  [
    ...document.getElementsByClassName(
      "lean-rooster rooster-editor propagate-keydown-event text-element view-mode"
    ),
  ].forEach((block) => {
    block.dir = "rtl";
  });

  [
    ...document.getElementsByClassName(
      "work-item-title-textfield not-active bolt-textfield flex-row flex-center focus-treatment"
    ),
  ].forEach((block) => {
    block.dir = "rtl";
    block.childNodes.forEach((child) => (child.style.textAlign = "left"));
  });

  [
    ...document.getElementsByClassName(
      "artifact-link-link h-scroll-hidden text-ellipsis bolt-link no-underline-link"
    ),
  ].forEach((block) => {
    block.dir = "rtl";
  });

  [
    ...document.getElementsByClassName(
      "work-item-title-link bolt-link no-underline-link"
    ),
  ].forEach((block) => {
    block.dir = "rtl";
  });

  [
    ...document.getElementsByClassName(
      "bolt-list-cell bolt-table-inline-link text-ellipsis bolt-link no-underline-link"
    ),
  ].forEach((block) => {
    block.dir = "rtl";
  });

  [...document.getElementsByClassName("bolt-tooltip-content body-m")].forEach(
    (block) => {
      block.dir = "rtl";
    }
  );

  [
    ...document.getElementsByClassName(
      "title rhythm-horizontal-8 bolt-link no-underline-link"
    ),
  ].forEach((block) => {
    [...block.getElementsByClassName("title-text word-break")].forEach(
      (title) => {
        title.dir = "rtl";
      }
    );

    [...block.getElementsByClassName("font-weight-semibold")].forEach(
      (title) => {
        title.style.marginInline = "5px";
      }
    );
  });
}, 500);
