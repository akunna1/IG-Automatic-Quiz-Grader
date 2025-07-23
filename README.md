# Instagram Quiz Scoreboard 🎉

A colorful and interactive scoreboard built with React and Next.js for tracking my Instagram quiz scores. Designed with a playful Cocomelon-inspired theme to keep it fun and engaging while being fully functional and responsive.

---

## Features

* Editable usernames for each player
* Increment and decrement buttons for **Red** and **Blue** scores
* Real-time calculation and display of the score difference (Blue - Red)
* Reset button to reset individual player scores to zero
* Responsive design for mobile, tablet, and desktop
* Bright, pastel Cocomelon-inspired colors with smooth hover effects
* Accessible buttons with aria-labels for better usability

---

## Tech Stack

* **Next.js** (React framework)
* **React** with hooks (`useState`)
* **Tailwind CSS** for styling and responsive layout
* Might add a database in the future 🤔

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/akunna1/IG-Automatic-Quiz-Grader.git
   cd ig-grader
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**

   Navigate to `http://localhost:3000` to view the scoreboard.

---

## Usage

* Click on any username to edit it inline.
* Use the red and blue `+` and `−` buttons to update scores.
* The difference column updates automatically.
* Click **Reset** to clear a player’s scores.

---

## Customization

* Update `initialPlayers` array in the component to add or remove players.
* Modify Tailwind classes in the component for custom styling or theme changes.

---

## Contributing

Feel free to open issues or pull requests to improve the scoreboard!
