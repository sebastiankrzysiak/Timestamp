<img src="icons/icon128.png" width="80" />

# Timestamp

A Chrome extension that automatically saves your progress on YouTube videos and resumes where you left off.

## The Problem

Long podcasts and videos on YouTube don't remember where you stopped watching. If you close the tab, the video starts from the beginning next time.

## How It Works

- Saves your playback position every 2 seconds
- Automatically resumes from where you left off when you reopen the video
- Won't restore if you watched more than 95% of the video (so finished videos restart from the beginning)
- Works across YouTube navigation without refreshing the page

## Installation

1. Clone or download this repo
2. Go to `chrome://extensions`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the project folder

## Tech

Built with vanilla JavaScript and the Chrome Extensions API (Manifest V3).
