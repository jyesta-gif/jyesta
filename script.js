// Google Drive FILE ID
const FILE_ID = "1C6QSJkvwT4-Nf4IO3DDj9WNOPRv8YAwS";

// Google Drive URLs
const PREVIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

// Load certificate preview on page load
window.onload = function () {
    const iframe = document.getElementById("cert-preview");
    iframe.src = PREVIEW_URL;
};

// Download certificate
function downloadCertificate() {
    const link = document.createElement("a");
    link.href = DOWNLOAD_URL;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
