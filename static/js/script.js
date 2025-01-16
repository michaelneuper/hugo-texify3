// Add copy button to <pre> blocks
document.addEventListener("DOMContentLoaded", function () {
  const preBlocks = document.querySelectorAll("pre");

  preBlocks.forEach(function (block) {
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-button");

    // copy and check SVG icons
    const svgCopy =
      '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="1rem" height="1rem" fill="currentColor" class="octicon octicon-copy"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>';
    // const svgCopy =
    //   '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>';
    const svgCopied =
      '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="1rem" height="1rem" fill="currentColor" class="octicon octicon-check"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>';

    copyButton.innerHTML = svgCopy;

    copyButton.addEventListener("click", function () {
      const textToCopy = block.innerText;

      copyButton.innerHTML = svgCopied;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log("Text copied to clipboard: " + textToCopy);
          setTimeout(() => {
            copyButton.innerHTML = svgCopy;
          }, 2000);
        })
        .catch((err) => {
          console.error("Unable to copy text to clipboard", err);
          copyButton.innerHTML = svgCopy;
          setTimeout(() => {
            copyButton.innerHTML = svgCopy;
          }, 2000);
        });
    });

    block.appendChild(copyButton);
  });
});

// Dark mode toggle
(function() {
	let darkMode = localStorage.getItem("darkMode");
	const toggleBtn = document.getElementById("dark-mode-toggle");

	function enableDarkMode() {
		document.documentElement.classList.add("darkmode");
		localStorage.setItem("darkMode", "enabled");
	}

	function disableDarkMode() {
		document.documentElement.classList.remove("darkmode");
		localStorage.setItem("darkMode", "disabled");
	}

	toggleBtn.addEventListener("click", () => {
		darkMode = localStorage.getItem("darkMode");
		if (darkMode !== "enabled") {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	});
})();

// Scroll to top button
var backToTopBtn = document.getElementById("back-to-top");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
