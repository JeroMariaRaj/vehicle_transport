# AutoHaul — Vehicle Shipping & Auto Transport HTML Template

Welcome to AutoHaul, a premium, multi-page HTML template designed specifically for Vehicle Shipping, Auto Transport, and Logistics companies.

## Features
- **50+ HTML Pages:** Two unique homepages, comprehensive service pages, dynamic dashboard layouts, and robust blog layouts.
- **Premium Design System:** Focused on logistics with Navy, Orange, and clean white palettes.
- **Bootstrap 5.3 & Responsive Layouts:** Fully responsive structure for mobile, tablet, and desktop devices.
- **Dark Mode & RTL Support:** Boilerplate CSS files included for dark themes and Right-to-Left languages.
- **Mock Data Simulation:** Includes interactive JS for the quote calculator, shipment tracking, and dashboard population via LocalStorage.
- **Unique Content:** All 8 service details and 8 blog articles contain unique, original copy pertinent to auto transport, not generic Lorem Ipsum.

## Folder Structure
- `index.html`, `home-2.html`: Main landing pages
- `service-*.html`: Detail pages for each auto transport service
- `blog-*.html`: Detail pages for each unique blog post
- `customer/`: Contains 12 pages for the Customer Portal Dashboard
- `admin/`: Contains 10 pages for the Administrative Dashboard
- `assets/`: Contains `css/`, `js/`, `images/`, and `fonts/`
- `build.py` and `generate_*.py`: Python scripts used to generate the static HTML files.

## Running Locally
This template uses standard HTML/CSS/JS. To view the site, simply open `index.html` in your web browser. 

For the best experience (and to avoid CORS issues with local files), use a local development server:
```bash
# If using Python
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## Customization
- **Colors:** Modify CSS variables in `assets/css/main.css`.
- **Content:** The content is statically generated using the python files (e.g. `generate_content.py`). To modify the base structure, edit the Python generators and re-run `python build.py`. 
- **Mock Data:** Edit `assets/js/mock-data.js` to change the simulated shipments used across the dashboards and tracking form.
