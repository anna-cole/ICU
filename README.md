# 📍 Hidden Location Tracker

This project silently captures a user's geolocation (with permission) and sends it to a secure server. The user sees a fake error page, while the actual location is visible to the admin on a map (e.g. Leaflet or Google Maps).

## 🚀 Features

- Uses the **Geolocation API** (requires user consent)
- Hides functionality behind a fake 404 error page
- Sends location data (latitude, longitude, timestamp) to your backend
- Admin-only map interface to view user locations in real-time
- Deployable using **Render** (or other Node.js-friendly hosts)

## 🛠️ Technologies Used

- **Frontend:** HTML, JavaScript
- **Backend:** Node.js, Express
- **Map Display:** Leaflet.js or Google Maps API
- **Deployment:** Render
- **Environment Variables:** Managed with `.env` + `dotenv`

## 📦 Installation

```bash
git clone https://github.com/yourusername/hidden-location-tracker.git
cd hidden-location-tracker
npm install
```

## 🔐 Create a `.env` file

At the root of the project, create a `.env` file with the following:

```
PORT=3000
SERVER_URL=http://localhost:3000
```

> 🔒 **Do not share** this file. It's excluded via `.gitignore`.

## ▶️ Run the app locally

```bash
npm start
```

Then visit: [http://localhost:3000](http://localhost:3000)

## 🗺️ View Admin Map

A separate route like `/admin` (or another protected route) can be used to show the locations on a map.

## ⚠️ Disclaimer

This project is for educational purposes only. Always get **clear consent** before collecting user location data and comply with all local privacy regulations.