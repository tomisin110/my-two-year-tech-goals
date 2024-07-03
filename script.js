const dateTimeElement = document.querySelector('.day');
        const date = new Date();
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = weekday[date.getDay()];
        dateTimeElement.textContent = `Current Day: ${d}`;

        // Get the current time in UTC
        const timeElement = document.querySelector('.time');
        const utcHours = date.getUTCHours().toString().padStart(2, '0');
        const utcMinutes = date.getUTCMinutes().toString().padStart(2, '0');
        const utcSeconds = date.getUTCSeconds().toString().padStart(2, '0');
        timeElement.textContent = `Current Time: ${utcHours}:${utcMinutes}:${utcSeconds} UTC`;

        // Update the time every second
        setInterval(() => {
            const date = new Date();
            const utcHours = date.getUTCHours().toString().padStart(2, '0');
            const utcMinutes = date.getUTCMinutes().toString().padStart(2, '0');
            const utcSeconds = date.getUTCSeconds().toString().padStart(2, '0');
            timeElement.textContent = `Current Time: ${utcHours}:${utcMinutes}:${utcSeconds} UTC`;
        }, 1000);