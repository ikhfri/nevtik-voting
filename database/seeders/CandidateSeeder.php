<?php

namespace Database\Seeders;

use App\Models\Candidate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CandidateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 5 candidates
        Candidate::create([
            'name' => 'M. Deni Lesmana Kurniawan',
            'photo' => '/candidates/Deni.jpg',
            'votes' => 0,
             //give me real angela merkel vision
            'vision' => 'Meningkatkan potensi siswa/i SMK Negeri 1 Cibinong untuk mewujudkan siswa/i yang berkualitas dan invoatif dengan memiliki karakter disiplin, tanggung jawab serta menjujung tinggi nilai kejujuran.',
            'missions' => json_encode([
                'Mengedepankan nilai akidah akhlak terhadap sesama individu sehingga terwujudnya siswa/i yang berkarakter mulia.',
                'Mendorong dan mengembangkan minat bakat siswa/i dalam bidang akademik maupun non-akademik.',
                'Mengadakan kegiatan yang berhubungan dengan pembinaan karatek secara
                terencana seperti seminar, lokakarya dan kegiatan ekstrakulikuler yang
                mengedepankan nilai-nilai disiplin, tanggung jawab dan kejujuran.',
                'Meningkatkan asas kekeluargaan dalam sebuah organisasi guna mempererat
                hubungan antar anggota serta meningkatkan kinerja anggota OSIS yang
                menjujung tinggi profesionalitas.'
            ]),
        ]);
        Candidate::create([
            'name' => 'Ghifirly Sakhaa Ghaisany',
            'photo' => '/candidates/Ghifirly.jpg',
            'votes' => 0,
            'vision' => 'Mencetak agen perubahan dengan mewujudkan lingkungan sekolah yang beriman,
                berkarakter, cerdas, serta memiliki daya saing.',
            'missions' => json_encode([
                'Merealisasikan kegiatan yang berbasis keagamaan.',
                'Menerapkan 5 S di dalam kehidupan sehari-hari',
                'Meningkatkan prestasi dengan mengadakan perlombaan akademik maupun non akademik',
                'Menyelenggarakan acara yang dapat mewadahi para warga sekolah',
            ]),
        ]);
        Candidate::create([
            'name' => 'Fairuz Fauziah',
            'photo' => '/candidates/Fairuz.jpg',
            'votes' => 0,
            'vision' => 'Terwujudnya OSIS dan siswa siswi SMKN 1 Cibinong yang berkarakter, disiplin,
                kreatif, unggul dalam prestasi akademik maupun non akademik, serta dapat mengikuti
                perkembangan zaman dengan berlandaskan iman dan taqwa kepada Tuhan Yang Maha Esa.',
            'missions' => json_encode([
                'Menumbuhkan dan meningkatkan keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa.',
                'Menerapkan 5S (Senyum, Salam, Sapa, Sopan, dan Santun) dalam lingkungan sekolah.',
                'Meningkatkan kedisiplinan terhadap warga sekolah.',
                'Membuat program kerja yang menarik untuk menumbuhkan kreativitas para siswa siswa.',
                'Mengembangkan serta menyalurkan minat dan bakat yang dimiliki oleh siswa siswi SMKN 1 Cibinong.',
                'Memanfaatkan peran media sosial sebagai alat untuk berbagi informasi dan menunjang kegiatan sekolah secara cepat dan tepat.'
            ]),
        ]);
        Candidate::create([
            'name' => 'Muhamat Arif Dwi Yana',
            'photo' => '/candidates/Arif.jpg',
            'votes' => 0,
            'vision' => 'Mewujudkan siswa SMKN 1 Cibinong menjadi siswa yang berprestasi,bertaqwa kepada Tuhan,memiliki jiwa kepemimpinan dan peduli akan lingkungan baik
                sosial ataupun alam dan membuat OSIS sebagai Poros penggerak pengembangan siswa dan wadah para siswa untuk mengembangkan minat dan bakat mereka.',
            'missions' => json_encode([
                'Memfasilitasi teruntuk para siswa untuk mengembangkan minat dan bakat mereka melalui berbagai macam program kerja.',
                'Meningkatkan rasa cinta peduli kebersihan dan lingkungan para siswa (general)',
                'Membuat OSIS sebagai pusat dan wadah informasi untuk meningkatkan integritas, wawasan dan pengetahuan siswa (general).',
                'Melakukan kaderisasi yang bertujuan menimbulkan jiwa kepemimpinan setiap siswa',
            ]),
        ]);
    }
}
