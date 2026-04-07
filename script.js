function swatchTime() {
    let date = new Date();
    let utc_hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    let milliseconds = date.getUTCMilliseconds();
    let bmt_hours = utc_hours + 1;
    let swatch = (((bmt_hours * 60 + minutes) * 60 + seconds) * 1000 + milliseconds) / 86400;
    swatch %= 1000;

    document.querySelectorAll('.swatch').forEach(el => {
        el.textContent = `@${swatch.toFixed(2)}`;
    });

    requestAnimationFrame(swatchTime);
}

requestAnimationFrame(swatchTime);
