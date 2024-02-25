## Business Logic

Login Page
Authenticated ->
Voting Page (Choosing one of candidates) and the status
Admin ->
Add & Delete The candidates (Name, Vision and Missions)
Manage the members (Name, NIS, and Voting Status)
Statistics of Candidates

# How to Open the project?

Tutorial Pull nya :

`git pull origin main`

`php artisan migrate:fresh`

`php artisan db:seed --class=CandidateSeeder`

`php artisan db:seed --class=UserSeeder` (Ini akan makan waktu lama, karena nge seeding Data Siswa)

New Terminal (Mesti Running buat generate ratusan data lebih cepet)
`php artisan queue:work`

Install Node JS di browser

masuk ke directory frontend
`cd frontend`

`npm i`

buka websitenya:
`npm run dev`

Login pake user admin (1234567890 pw: 123qweasd)
