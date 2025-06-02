<div align="center">
  <img src="./public/logo.svg" height="100" alt="Mawrid Logo"/>
  <h1>مورد</h1>
  <p>منصة تهدف إلى جمع وتوثيق المشاريع الإسلامية المتنوعة في مكان واحد لتسهيل الوصول، وتشجيع التعاون، وتجنب التكرار.</p>

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/github/package-json/v/mohmmedraad/mawrid)
![Contributors](https://img.shields.io/github/contributors/mohmmedraad/mawrid)
![Stars](https://img.shields.io/github/stars/mohmmedraad/mawrid?style=social)

[🇺🇸 English](README.md) | [🇸🇦 العربية](README.ar.md)

</div>

<br/>

![](https://i.imgur.com/waxVImv.png)

<br/>

## 📋 الوصف

مورد هي منصة شاملة مصممة لتجميع المشاريع والمصادر الإسلامية. مهمتنا هي إنشاء مساحة موحدة حيث يمكن للمطورين والباحثين والمجتمع المسلم اكتشاف المبادرات الرقمية الإسلامية والمساهمة فيها والتعاون عليها، مما يقلل من ازدواجية الجهود ويعزز الابتكار.

## 🚀 كيفية تشغيله على جهازك

لإعداد وتشغيل مورد على جهازك:

```bash
git clone https://github.com/mohmmedraad/Mawrid.git
cd mawrid
pnpm install
pnpm run dev
```

تأكد من تثبيت [Node.js](https://nodejs.org/) و [pnpm](https://pnpm.io/) على نظامك قبل تشغيل هذه الأوامر.

## 🤝 كيفية المساهمة

نرحب بمساهمات المجتمع! لإضافة مشروع إسلامي جديد إلى قاعدة البيانات الخاصة بنا:

1. **انسخ المستودع** وأنشئ فرعاً جديداً لمساهمتك
2. **انتقل إلى مجلد البيانات**: `src/data/projects/`
3. **أضف مشروعك إلى ملفي اللغة**:
    - `en.json` (النسخة الإنجليزية)
    - `ar.json` (النسخة العربية)

### 📝 تنسيق إدخال المشروع

يجب أن يتبع كل إدخال مشروع هذا الهيكل:

**الإنجليزية (`en.json`):**

```json
{
    "links": [
        {
            "type": "website",
            "link": "https://www.nekhtem.com/"
        },
        {
            "type": "play-store",
            "link": "https://play.google.com/store/apps/details?id=com.karim.khatma&hl=ar"
        },
        {
            "type": "apple-store",
            "link": "https://apps.apple.com/us/app/%D9%86%D8%AE%D8%AA%D9%85/id1348796942"
        }
    ],
    "title": "Nakhtem",
    "image": "https://www.nekhtem.com/assets/images/logo.svg",
    "categories": ["quran-tafsir", "multilingual"],
    "description": "Nakhtem Application It makes you read a verse every time you open your mobile phone, so that you are not among those who \"have taken this Quran as something neglected.\""
}
```

**العربية (`ar.json`):**

```json
{
    "links": [
        {
            "type": "website",
            "link": "https://www.nekhtem.com/"
        },
        {
            "type": "play-store",
            "link": "https://play.google.com/store/apps/details?id=com.karim.khatma&hl=ar"
        },
        {
            "type": "apple-store",
            "link": "https://apps.apple.com/us/app/%D9%86%D8%AE%D8%AA%D9%85/id1348796942"
        }
    ],
    "title": "نختم",
    "image": "https://www.nekhtem.com/assets/images/logo.svg",
    "categories": ["quran-tafsir", "multilingual"],
    "description": "تطبيق نختم يجعلك تقرأ آية في كل مرة تفتح فيها هاتفك المحمول، حتى لا تكون ممن {اتخذوا هذا القرآن مهجورا}"
}
```

### ✅ الحقول المطلوبة:

-   **links**: مصفوفة من الروابط، كل رابط يحتوي على:
    -   **type**: نوع الرابط (مثل: website, play-store, apple-store)
    -   **link**: عنوان URL للرابط
-   **title**: اسم المشروع
-   **image**: رابط الشعار أو الصورة التمثيلية
-   **categories**: مصفوفة من الفئات ذات الصلة
-   **description**: وصف مختصر للمشروع

4. **أرسل طلب دمج** مع وصف واضح للمشروع الذي تضيفه

## 📄 الترخيص

هذا المشروع مرخص بموجب رخصة MIT - راجع ملف [LICENSE](LICENSE) للحصول على التفاصيل.

## 📞 التواصل

للأسئلة أو الاقتراحات، يرجى فتح مشكلة في هذا المستودع.
