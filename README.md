<div align="center">
  <img src="./public/logo.svg" height="100" alt="Mawrid Logo"/>
  <h1>Mawrid</h1>
  <p>A platform that gathers and documents diverse Islamic projects in one place</p>

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/github/package-json/v/mohmmedraad/mawrid)
![Contributors](https://img.shields.io/github/contributors/mohmmedraad/mawrid)
![Stars](https://img.shields.io/github/stars/mohmmedraad/mawrid?style=social)

[🇸🇦 العربية](README.ar.md) | [🇺🇸 English](README.md)

</div>

<br/>

![](https://i.imgur.com/waxVImv.png)

<br/>

## 📋 Description

Mawrid is a comprehensive platform designed to centralize Islamic projects and resources. Our mission is to create a unified space where developers, researchers, and the Muslim community can discover, contribute to, and collaborate on Islamic digital initiatives, reducing duplication of efforts and fostering innovation.

## 🚀 How to Run Locally

To set up and run Mawrid on your local machine:

```bash
git clone https://github.com/mohmmedraad/Mawrid.git
cd mawrid
pnpm install
pnpm run dev
```

Make sure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed on your system before running these commands.

## 🤝 How to Contribute

We welcome contributions from the community! To add a new Islamic project to our database:

1. **Fork the repository** and create a new branch for your contribution
2. **Navigate to the data directory**: `src/data/projects/`
3. **Add your project to both language files**:
    - `en.json` (English version)
    - `ar.json` (Arabic version)

### 📝 Project Entry Format

Each project entry should follow this structure:

**English (`en.json`):**

```json
{
    "link": "https://quran.com",
    "title": "Quran.com",
    "image": "https://quran.com/images/logo/Logo@192x192.png",
    "categories": ["quran-tafsir", "multilingual"],
    "description": "A popular online Qur'an reader with translations, tafsir, and recitations."
}
```

**Arabic (`ar.json`):**

```json
{
    "link": "https://quran.com",
    "title": "Quran.com",
    "image": "https://quran.com/images/logo/Logo@192x192.png",
    "categories": ["quran-tafsir", "multilingual"],
    "description": "قارئ قرآن شهير على الإنترنت يحتوي على ترجمات وتفسير وتلاوات."
}
```

### ✅ Required Fields:

-   **link**: The project's main URL
-   **title**: Project name
-   **image**: Logo or representative image URL
-   **categories**: Array of relevant categories
-   **description**: Brief description of the project

4. **Submit a Pull Request** with a clear description of the project you're adding

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or suggestions, please open an issue on this repository.
