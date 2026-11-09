# About.Uzbekistan AI sozlash

Sayt Google Gemini va Anthropic Claude AI xizmatlarini qo'llaydi. API kalitlari faqat Vercel server muhitida saqlanishi kerak; ularni HTML/JavaScript fayllariga, GitHub'ga yoki chatga qo'shmang.

## Vercel'ga joylash

1. `javaanime00-gif/javohir_rip` GitHub repozitoriysini Vercel'da import qiling.
2. Framework preset sifatida **Other** ni tanlang, root directory'ni o'zgartirmang.
3. Vercel loyihasining **Settings → Environment Variables** bo'limida quyidagilarni kiriting:
   - `GEMINI_API_KEY` — Google AI Studio'dan olingan kalit.
   - `ANTHROPIC_API_KEY` — Anthropic Console'dan olingan kalit.
4. Kalitlarni Production muhitida belgilang, so'ng **Redeploy** qiling.
5. Sayt Vercel domenida ishlaydi. GitHub Pages faqat statik fayllarni ko'rsatadi va `/api/chat` server funksiyasini ishga tushira olmaydi.

Model nomlari o'zgarsa, Vercel muhitida ixtiyoriy `GEMINI_MODEL` va `ANTHROPIC_MODEL` qiymatlarini qo'yish mumkin. Standartlar: `gemini-3.6-flash` va `claude-haiku-5-5`.

## Xavfsizlik va maxfiylik

- API kalitlarni hech kimga yubormang va ommaviy repozitoriyga joylamang.
- Suhbat xabarlari tanlangan provayderga (Google yoki Anthropic) jo'natiladi. Sahifa suhbat tarixini brauzer xotirasida saqlamaydi.
- Backend har bir server nusxasida so'rovlarni cheklaydi, ammo bu to'liq DDoS yoki xarajat himoyasi emas. Provayder boshqaruv panellarida sarf limiti yoki kvota qo'ying va Vercel Firewall yoki CAPTCHA kabi qo'shimcha suiiste'molga qarshi cheklovlardan foydalaning.
- AI javoblari xato qilishi mumkin. Safar, xavfsizlik, chipta va ish vaqti kabi yangilanadigan ma'lumotlarni albatta rasmiy manbadan tekshiring.
