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
            'name' => 'Angela Merkel',
            'photo' => 'angela-merkel.jpg',
            'votes' => 0,
             //give me real angela merkel vision
            'vision' => 'The future is wide open and depends on us, on all of us',
            'missions' => json_encode([
                'no shadow had darkened her childhood.',
                'I experienced firsthand how nothing has to stay the way it is…Anything that seems set in stone or inalterable can indeed change',
                'like being in a dark room, so dark you couldn`t see your hand in front of your face',
            ]),
        ]);
        Candidate::create([
            'name' => 'Recep Tayyip Erdoğan',
            'photo' => 'erdogan.jpg',
            'votes' => 0,
            'vision' => 'Per capita income of $25,000. Increase annual Turkish exports to $500 billion.',
            'missions' => json_encode([
                '1 million jobs project',
                'We have also started work to increase the annual capacity of the Trans-Anatolian Natural Gas Pipeline (TANAP)',
                'Stating that with the hydrocarbon agreement with Libya has created a new area of cooperation in the extraction of oil and derivatives from this country`s continental shelf',
                'contacts for new deals in the field of energy with Oman, Qatar, Indonesia, Algeria, Nigeria, Malaysia, Kazakhstan and the United Arab Emirates.',
            ]),
        ]);
        Candidate::create([
            'name' => 'Xi Jinping',
            'photo' => 'xi-jinping.jpg',
            'votes' => 0,
            'vision' => 'The Work of the Past Five Years and the Great Changes in the First Decade of the New Era',
            'missions' => json_encode([
                'developed well-conceived and complete strategic plans for advancing the cause of the Party and the country in the new era',
                'achieved moderate prosperity, the millennia-old dream of the Chinese nation, through persistent hard work',
                'comprehensively deepened reform with tremendous political courage',
                'implemented a people-centered philosophy of development',
                'pursued major-country diplomacy with Chinese characteristics on all fronts',
            ]),
        ]);
        Candidate::create([
            'name' => 'Vladimir Putin',
            'photo' => 'vladimir-putin.jpg',
            'votes' => 0,
            'vision' => 'reasserted control over Russia`s 89 regions and republics, dividing them into seven new federal districts, each headed by a representative appointed by the president.',
            'missions' => json_encode([
                'pledged Russia`s assistance and cooperation in the U.S.-led campaign against terrorists and their allies, offering the use of Russia`s airspace for humanitarian deliveries and help in search-and-rescue operations',
                'Vladimir Putin is regularly updated on situation in Bryansk Region',
                'Meeting with Sakhalin Region Governor Valery Limarenko',
                'Meeting of Inter-Agency Working Group on Climate Change and Sustainable Development',
            ]),
        ]);
    }
}
