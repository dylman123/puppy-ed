import image001 from './artwork/Am I Ready.svg';
import image002 from './artwork/Getting in Touch.svg';
import image003 from './artwork/What to look for in a Breeder.svg';
import image004 from './artwork/NewHealth.svg';
import image005 from './artwork/Nutrition.svg';
import image006 from './artwork/DogNBall.svg';
import image007 from './artwork/Labrador.svg';
import image008 from './artwork/French Bulldog.svg';
import image009 from './artwork/Pug.svg';
import image010 from './artwork/Papillon.svg';
import image011 from './artwork/Boxer.svg';
import image012 from './artwork/Whippet.svg';
import image013 from './artwork/Bichon.svg';
import image014 from './artwork/Golden_Retriever.svg';
import image015 from './artwork/Cocker.svg';
import image016 from './artwork/Scotty.svg';
import image017 from './artwork/Rottweiler.svg';
import image018 from './artwork/Dachshund.svg';

import lisa_image from './authors/lisa-wallace.webp';

export const modules = [
    {
      title: "Am I ready for a pup?",
      description: "So you think it’s the right time for a pup? Let’s get the house in order, set aside time for training and manage your expectations in this module.",
      slug: "am-i-ready-for-a-pup",
      imageFile: image001,
    //   category: "getting-started",
    },
    {
      title: "Why buy from an ANKC breeder?",
      description: "ANKC registered breeders breed to improve the breed, maintaining quality and ethical breeding practises. Learn about the key benefits of buying from an ANKC registered breeder.",
      slug: "why-buy-from-an-ankc-breeder",
      imageFile: image003,
    //   category: "getting-started",
    },
    {
      title: "Getting in touch with breeders",
      description: "Our breeders are loving people with big hearts who are looking to place their pups in a caring and loving environment. Learn about their roles and responsibilities.",
      slug: "getting-in-touch-with-breeders",
      imageFile: image002,
    //   category: "getting-started",
    },
    {
      title: "Health",
      description: "We want to ensure healthy and happy lives for our pups. This quiz is about vaccinations, signs of poor health, and preventative measure you can take for your pup.",
      slug: "health",
      imageFile: image004,
      category: "basics",
      quizUrl: "https://docs.google.com/forms/d/e/1FAIpQLScFIccDSTO3SoT34GhXlHi27bD6bCF9nRlYivCKEIyRu7yODQ/viewform?usp=sf_link",
    },
    {
      title: "Nutrition",
      description: "Dogs need a healthy and balanced diet to ensure their health and happiness. What they eat is different to what we eat. This quiz is about providing your pup with a healthy diet.",
      slug: "nutrition",
      imageFile: image005,
      category: "basics",
      quizUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdg7QVmCqSKIAjpj-eUjiTU_IrfVDKzCO-gFRjqNfpcxvUv-Q/viewform?usp=sf_link",
    },
    {
      title: "Exercise",
      description: "Time to stretch the legs and go to the park. Learn about some of the Do’s and Dont’s when it comes to exercising your pup.",
      slug: "exercise",
      imageFile: image006,
    //   category: "basics",
    },
    {
      title: "Labrador Retriever",
      slug: "labrador-retriever",
      description: "This quiz is aimed at teaching the wider community about the Labrador Retriever. Provide your feedback on the information in this quiz!",
      imageFile: image007,
      category: "dog-breeds",
      sections: {
          "origin": {
            text: "The Labrador originated in Newfoundland, off the coast of Canada, and was taken to England on fishing boats in the early 19th century. Here they were developed and bred as a hunting dog, being used for retrieving game in rugged terrain and icy waters. They were popular as tough, strong dogs with excellent scenting powers and a strong desire to please. Even today, Labrador Retrievers are the most popular breed with shooters and they also work as police dogs, customs dogs and guide dogs for the blind.",
            source: "https://dogsvictoria.org.au/family-pet/dogs-and-puppies/buying-a-puppy/breed-information-and-registered-breeders/labrador-retriever/",
          },
          "fun-fact": {
            text: "It is believed that the Labrador Retriever was bred to retrieve fishing nets and stray fish that fell off hooks. Labradors sport webbed feet, and an otter like tail that assist their strong swimming tendencies.",
          },
          "behaviour": {
            text: "They are friendly, good-natured dogs who are affectionate with everyone. They are adaptable dogs and are naturally social animals. They bond well with children, being patient and forgiving. Other household animals are not at risk. They are extremely loyal and love to be included in all aspects of family life. They will bark to draw your attention to strangers but will welcome them with open arms. Labrador pups often forget how big and powerful they are during play time. It is therefore important to keep an eye on them when around children and similarly, the elderly.",
            source: "https://www.purina.com.au/en/dogs/breeds/labrador-retriever#.YHea4ZMza3I",
          },
          "health": {
            text: "Labradors do have a range of health issues to be conscious of. Breeders should screen for hereditary problems such as hip dysplasia, elbow dysplasia, progressive retinal atrophy and epilepsy to reduce the likelihood of your puppy being susceptible to such diseases. During the first 12 months of development, owners should be cautious of their pups hips and ensure that they are not running or jumping excessively. This can result in hip and elbow problems such as dysplasia. Labradors are incredibly driven by food. This can result in excessive feeding and obesity. It is recommended to weigh your pup's food to ensure consistency.",
            source: "https://www.purina.com.au/en/dogs/breeds/labrador-retriever#.YHea4ZMza3I"
          },
          "exercise": {
            text: "Adults will benefit from a daily walk of a minimum of fourty-five minutes, while pups will need overall periods of play. As a Labrador will need some free running, a large backyard is desirable - especially if you live in an area where having a dog off-leash in public parks is not permitted. Labradors are sociable dogs that really need to be part of a family. If left alone in a backyard most of the time, they may get up to mischief or take to persistent barking. They adore retrieving and water, so do take care when near the latter to ensure their safety.",
            source: "https://dogsvictoria.org.au/family-pet/dogs-and-puppies/buying-a-puppy/breed-information-and-registered-breeders/labrador-retriever/ & https://www.purina.com.au/en/dogs/breeds/labrador-retriever#.YHea4ZMza3I",
          },
          "training": {
            text: "Intelligent dogs, Labradors are easily trained, making them ideal for use in field sports, obedience competitions, as search dogs, as guide dogs and as hearing dogs. These dogs take great pleasure in any of these activities. Labradors are particularly driven by food and respond well to treats used as positive reinforcement for good behaviour.",
            source: "https://www.purina.com.au/en/dogs/breeds/labrador-retriever#.YHea4ZMza3I",
          },
          "grooming": {
            text: "Labs are very active, strongly built dogs with good bone and substance. Their heads are broad with soft, intelligent eyes. They have a double coat: the undercoat being weather-resistant and the outer coat being short and dense with no feathering. Their tails are totally unique being 'otter' like and their movement is straight and true both front and back, covering the ground freely.\n\nTheir coat is thick and dense with a weather-resistant undercoat. Labs shed moderately all year round with an increase just before both summer and winter (approximately 3 weeks). Brush them once a week with more attention during moulting.\n\nLabrador Retrievers come in solid black, yellow and chocolate brown/liver. Any other colours being advertised are not recognised as the correct standards and will be predisposed to a host of other health issues.",
            source: "https://www.purina.com.au/en/dogs/breeds/labrador-retriever#.YHea4ZMza3I",
          }
      },
      quizUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfgaBuvemByt1SoYKXaJbPnPc5K_ogAHDm-zr5lb5cs0CyCSg/viewform?usp=sf_link",
    },
    {
      title: "Golden Retriever",
      slug: "golden-retriever",
      description: "This quiz is aimed at teaching the wider community about the Golden Retriever. Provide your feedback on the information in this quiz!",
      imageFile: image014,
      // category: "dog-breeds",
    },
    {
      title: "French Bulldog",
      slug: "french-bulldog",
      description: "This quiz is aimed at teaching the wider community about the French Bulldog. Provide your feedback on the information in this quiz!",
      imageFile: image008,
      category: "dog-breeds",
      sections: {
        "origin": {
          text: "Around the time of the Industrial Revolution in the UK, a group of British bulldog breeders developed a smaller, lighter toy bulldog, around 12-25 lbs in weight, having either upright or rose ears, round foreheads and short under-jaws —and perhaps a touch of terrier liveliness. These were quite popular with workers in the English midlands, in particular the artisans in the lace-making industry around Nottingham. At the conclusion of the Industrial Revolution these lace-makers emigrated to the North of France—and they took their little bulldogs with them. The popularity of these little dogs spread from Normandy to Paris and soon the English breeders had a lively trade, exporting small bulldogs to France. Breeders say the French Bulldog has been in Australia since the late 1940's and was developed from imported English bloodlines.",
          source: [
            "https://frenchbulldogclub.org/history/",
            "https://www.purina.com.au/en/dogs/breeds/french-bulldog#.YHY3_bQza3I",
          ],
        },
        "fun-fact": {
          text: "It is believed that the French Bulldog is a mix of the English Bulldog, the Pug and the Rat Terrier. French Bulldogs are unable to breed naturally and require artificial insemination. Often, due to their narrow hips, French Bulldogs require a C-Section at birth.",
        },
        "behaviour": {
          text: "The French Bulldog is a pleasant, easy-care companion, who is playful, alert and affectionate. Enthusiastic and lively, but are not yappy and loud. Curious, sweet and absolutely hilarious; they have a very comical personality and love to clown around. They are bright and easygoing. The Frenchie gets along fairly well with strangers and other animals and enjoys being with their owners. They play well with other dogs. They are suitable for a family with children.",
          source: "https://www.purina.com.au/en/dogs/breeds/french-bulldog#.YHY3_bQza3I",
        },
        "health": {
          text: "The French Bulldog has gained popularity due to its unique appearance. The French bulldog is Brachycephalic (the distinctive squashed face) which is adorable, but can cause a range of health problems to be aware of. The most common of which is Brachycephalic Obstructive Airway Syndrome, which is the obstruction of the upper airway tract. The extent to how much a Brachycephalic dog suffers from BOAS varies, but it is important to understand the risks, and potential treatments.\n\nBOAS can cause snoring, regurgitation or reflux, noise during exercise, exercise intolerance and interrupted sleep.\n\nBrachycephalic dogs are also prone to a range of eye problems due to their short faces, large eyelid openings and large eyes. Make sure to be alert for any redness, swelling or discharge from the eyes, and get your pup checked out if you do notice any symptoms. Eyes can change quite quickly which means they often respond quickly to the correct treatment, and also means they can worsen quickly without medical attention.\n\nOther potential health risks are a weakness in the back which can be aggravated by the dog jumping down from furniture, particularly when young and luxating patellas (dislocating knee joints).",
          source: "https://melbournebulldogclinic.com.au/bulldog-health/airways/"
        },
        "exercise": {
          text: "A daily walk is necessary to maintain a satisfactory level of fitness. French Bulldogs are prone to overheating due to their Brachycephalic nature and this must be considered during exercise. French Bulldogs are also unable to swim due to squashed faces and their stocky build.",
        },
        "training": {
          text: "French Bulldogs are intelligent but notoriously stubborn learners. To train them use consistency and firmness as well as a lot of patience. Don’t be surprised if your pup chooses to end the training session and curl up on the sofa to studiously ignore you.",
          source: "https://www.purina.com.au/en/dogs/breeds/french-bulldog#.YHY3_bQza3I",
        },
        "grooming": {
          text: "The French Bulldog should stand around 30cm in height and weigh 10-15kg. Colours include only: brindle (which can have white but is mostly brindle), pied (mostly white), and fawn. All the following colours are highly undesirable: solid black, black and white, black and tan, mouse, grey/blue, liver/chocolate and all patterns of these colours lead to a host of health problems in French Bulldogs.\n\nThe smooth, short-haired coat is easy to groom. Brush on a regular basis with a firm bristle brush, and bathe once every two weeks in the warmer months and bathe once a month in the colder months. The French Bulldog does shed a little but twice a year they lose their undercoat.",
          source: "http://ankc.org.au/Breed/Detail/75",
        }
    },
      quizUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdvvfzSrhMlidnIeJecUgSMgsjbVtpRJ6l9AHEKGkQx8pzV7Q/viewform?usp=sf_link",
    },
    {
      title: "Pug",
      slug: "pug",
      description: "This quiz is aimed at teaching the wider community about the Pug. Provide your feedback on the information in this quiz!",
      imageFile: image009,
    //   category: "dog-breeds",
    },
    {
      title: "Rottweiler",
      slug: "rottweiler",
      description: "This quiz is aimed at teaching the wider community about the Rottweiler. Provide your feedback on the information in this quiz!",
      imageFile: image017,
      category: "dog-breeds",
      author: {
        userId: "61456539-6c96-4cd1-bc13-65432e8235a4",
        displayName: "Lisa Wallace",
        prefix: "Nowstarin Rottweilers Australia",
        profileImage: lisa_image,
      },
      sections: {
        "origin": {
          text: "The Rottweiler can be traced back to the Roman Armies and is therefore considered to be one of the oldest breeds. When the army was on the move, the Rottweiler assisted by droving their livestock and other animals. The Rottweiler gets its name from its place of origin, a small European town in the south of Germany, named Rottweil. Rottweil was a livestock centre, where butchers would congregate during long expeditions throughout the country side. On the way into Rottweil, the dogs would help drove the cattle, whilst on the way out, the butchers would tie their money around the neck of their trusty Rottweiler for safe-guarding from any threats.\n\nThe Rottweiler was then used to pull the carts with slaughtered meat across the European Alps due to their strong and powerful nature.\n\nThe Rottweiler therefore became an excellent herding dog, carting dog, and family protection guard dog with great strength, manoeuvrability and endurance with an eagerness to please his master and family.",
        },
        "fun-fact": {
          text: "Suggest a fun fact about the Rottweiler below.",
        },
        "behaviour": {
          text: "When considering introducing a dog into your home, it is of utmost importance to understand the temperament and characteristics of the desired breed. Often temperament is overlooked in favour of appearance.\n\nTo understand the Rottweiler, one has to consider their use and purpose from origin. As mentioned before, the Rottweiler was previously employed in the guarding and herding roles of armies and the stock trade. They were expected to deal with a resistant bull or thief. The dog had to be courageous, determined, eager to fulfill duty, and strong both physically and mentally. The Rottweiler of today will still possess these qualities and traits handed down through generations. These qualities are highly desirable in a Rottweiler, however if these natural tendencies are neglected and suppressed this dog may be left frustrated and lead to behavioural difficulties. When frustration and behavioural difficulties are mixed with a large dog that can weigh 50kgs or more, some further consideration is necessary by potential buyers.\n\nThis is why the Rottweiler is not recommended for elderly or the infirm. Commitment to a Rottweiler is at the higher level of dog ownership.\n\nRottweiler’s are also an incredibly loyal family dog, and are perfectly capable of being employed as a therapy/service dog.\n\nEarly socialisation and constant exposure to new situations, varying experiences and day to day contact with people and dogs as well as stimulation of the aforementioned characteristics of the Rottweiler through obedience, agility, socialisation or tracking, performance training will lead to a happy and non-destructive companion.",
        },
        "health": {
          text: "As with any breed, there are a few health considerations when considering a Rottweiler. The first of which is Hip Dysplasia and Elbow Dysplasia. Common in larger dogs, hip dysplasia is the fit of the ball of the femur with the socket of the hip and Elbow Dysplasia is the developmental abnormality of the bone formation in the elbow socket. Whilst breeders usually test for a predisposition through hip and elbow scores of parents, hip dysplasia can be inherited as well as environmental, usually developed in the earliest stages of life.\n\nThe Rottweiler Club Hip Dysplasia Scheme allows for scores of up to 16 in bitches, and 12 in studs used in breeding, whilst the combination of both mother and father both needs to be less than 20.\n\nThe Rottweiler Club Elbow Dysplasia Scheme allows for grade 0 and grade 1 considered suitable for breeding.\n\nEnvironmental risks that can impact Hip Dysplasia are overweightness, as well as over-use at an early stage through running on slippery surfaces, long distance running as a pup, jumping from elevated levels, jumping in and out of vehicles as a pup and more.\n\nFront leg lameness, also known as Ostechondritis (OCD) is a condition that causes your dog to limp in the front. This condition covers a range of issues stemming from incorrect bone growth. Common sites for the disease are in the elbows and shoulders.\n\nRottweilers can suffer from a degenerative genetic disease Entropian, Ectropian or eyes of dissimilar colour, eyelid deformities. There is a screening process for this, they must be clear in all areas to be suitable for breeding (eye certificate).\n\nRottweilers are required to have 42 teeth, scissor bite and no other abnormalities to be considered suitable for breeding (mouth certificate).\n\nRottweilers can develop heart problems, including cardiomyopathy and subaortic stenosis (SAS), a narrowing of the aorta that carries blood away from the heart. This usually shows up first as a slight heart murmur, but murmurs can often occur in puppies who have no heart problems as adults.\n\nRotties are also more susceptible to canine bloat, a condition in which the stomach can turn and block, causing a build-up of gas. Unless treated very quickly, bloat can be fatal.\n\nNever exercise dogs after feeding.",
        },
        "exercise": {
          text: "Rottweilers love swimming, walking, and trotting, especially with their owners. The breed is muscular and athletic, and should have the opportunity to exercise on a daily basis. Spend as much of your leisure time with your trusty companion to ensure a strong bond but also to stimulate your Rottweiler as to reduce destructiveness and ensure a happy and content dog around the house. Rottweilers excel when given a job to do. They can learn easily to cart and are excellent workers in herding, tracking, and obedience. There is no limit to the canine activities that the Rottweiler can learn to do.",
        },
        "training": {
          text: "Eager to please his master, but at times can be quite stubborn, effective control over your Rottweiler must be established from an early age. Obedience training is a must for a Rottweiler. The more you as the owner put in, you will have a more well balanced dog. Rottweilers respond well to verbal reprimands and rewards. The Rottweiler is an intelligent and confident breed. It is imperative that all discipline is consistent, fair and firm. Your Rottweiler will enjoy and excel in any of the following activities: Obedience, Agility, Tracking and/or Performance training. Use these activities to not only create a strong bond between you and your dog, but also to increase intelligence and keep your dog stimulated. A well stimulated dog is less destructive around the house, and leaves everyone happier.",
        },
        "grooming": {
          text: "The Rottweiler is a medium to large size, stalwart dog, neither heavy nor light and neither leggy nor weedy. Its correctly proportioned, compact and powerful build leads to the conclusion of great strength, agility and endurance.\n\nIts colour is Black with clearly defined markings of a rich tan on the cheeks, muzzle, throat, chest and legs, as well as over both eyes and under the base of the tail.\n\nRottweilers shed moderately all year round, with an increased volume in the changing of seasons.\n\nRottweilers are large, strong and powerful dogs and therefore require a greater emphasis placed on obedience training.",
        }
      },
      quizUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdHjvJ9eyEE0uegLgw5EBAHPzS1xbsqkpVNwaaZmfeQFaG6ZA/viewform?usp=sf_link",
    },
    {
      title: "Papillon & Phalene",
      slug: "papillon",
      description: "This quiz is aimed at teaching the wider community about the Papillon & Phalene. Provide your feedback on the information in this quiz!",
      imageFile: image010,
    //   category: "dog-breeds",
    },
    {
      title: "Boxer",
      slug: "boxer",
      description: "This quiz is aimed at teaching the wider community about the Boxer. Provide your feedback on the information in this quiz!",
      imageFile: image011,
      category: "dog-breeds",
      quizUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdEpN0ou6rGGcPDy5V5-fW2peL0eRyrK0wVfKAXnq0oBgb4ig/viewform",
      sections: {
        "origin": {
          text: "The Boxer’s ancestors, the war dogs of the Assyrian empire, go back as far as 2,500 B.C. The breed is thought to have been bred down by German dog fanciers from a larger, heavier German breed called the Bullenbeisser (“bull biter”).These dogs were used to hunt boar, bear and deer. These ancestors of the Boxer were also used for bull-baiting when this became a sport. In the 19th century these breeds were crossed with the Bulldog and the Boxer we think of today was created. The breed has been very popular in Europe since early this century, however the first Boxer to be registered with the Kennel Club in Britain was in 1933.",
          source: [
            "https://www.purina.com.au/en/dogs/breeds/boxer-dog#.YOfhqxMzZhE",
            "https://www.akc.org/dog-breeds/boxer/"
          ],
        },
        "fun-fact": {
          text: "Some breed historians say Boxers were used to help butchers in Germany by controlling cattle in slaughterhouses. Therefore, they believe that Boxes are named from the German word boxl, their slaughterhouse designation. Others contend the name boxer comes from the characteristic way that they use their forepaws to play, sparring much like a human boxer.",
          source: "https://www.hillspet.com/dog-care/dog-breeds/boxer",
        },
        "behaviour": {
          text: "As a breed these dogs are very lively, strong and very loyal. Temperament wise they are fearless and very self-assured. The boxer is a hardy dog full of stamina, not quick to pick a fight, but more than able to defend themselves if they have to. They take the jobs of watchdog and family guardian seriously and will meet threats fearlessly. Their patience and protective nature have earned them a reputation as a great dog with children. Boxers do best when exposed to a lot of people and other animals in early puppyhood. They remain puppy-like throughout their lives, making them quite a handful, and unintentionally creating havoc where they go. They can be very destructive if they are left alone at home for long periods of time.",
          source: [
            "https://www.purina.com.au/en/dogs/breeds/boxer-dog#.YOfhqxMzZhE",
            "https://www.akc.org/dog-breeds/boxer/",
          ],
        },
        "health": {
          text: "Although the Boxer seems susceptible to many health problems, research shows that the Boxer is, in general, a healthy and sturdy dog. When purchasing a Boxer discuss any concerns with the breeder and research the breeding lines. Some common health issues to consider are: hip dysplasia, heart conditions such as aortic stenosis (where the aorta narrows below the aortic valve, forcing the heart to work harder to supply blood to the body) and cardiomyopathy. Some more health issues to look out for thyroid deficiency which may produce signs that include infertility, obesity, mental dullness, and lack of energy. Boxers can also be prone to degenerative myelopathy which is a progressive disease of the spinal cord in older dogs, and certain cancers (mast cell tumours, lymphoma, and brain tumours).",
          source: [
            "https://dogtime.com/dog-breeds/boxer#/slide/1",
            "https://www.akc.org/dog-breeds/boxer/"
          ]
        },
        "exercise": {
          text: "Boxers are very playful, high-energy dogs. They need ample exercise every day, on leash or in a securely fenced area. Giving your Boxer plenty of daily exercise is the best way to ensure good behaviour. A tired Boxer is a good Boxer. The breed's heritage as a chaser of wild game means that they spend a good deal of time jumping and leaping about. As young dogs, they are constantly in need of reminders to teach them to stay 'down.'Because the Boxer is a powerful, active, and playful dog, he may not be the best choice for a very frail adult, nor for a small child who could be overwhelmed by a well-meaning but bouncy puppy.",
          source: "https://www.akc.org/dog-breeds/boxer/",
        },
        "training": {
          text: "Training is essential for the Boxer. They're so big and strong that they can accidentally hurt people by knocking them over if they don't learn to control their actions. The Boxer's temperament plays a role in their trainability. They're happy and excitable, bouncy, and a bit of a mischief-maker. Getting them to take training seriously requires starting early and using firm, fair training methods and positive motivation in the form of praise, play, and food rewards. Be consistent. Your Boxer will notice any time you let them get away with something, and they'll push to see what else he can get away with. Before you head to training class, settle them down a little with an energetic walk or play session. Boxers excel in a wide range of canine sports, including obedience, agility, and herding, and they perform brilliantly as service, assistance, and therapy dogs, and in roles such as drug detection and search-and-rescue.",
          source: "https://www.akc.org/dog-breeds/boxer/",
        },
        "grooming": {
          text: "The Boxer's short, shiny coat requires very little grooming but they do shed moderately. A good once-over with a rubber curry-brush or a hound glove once or twice a week should keep him looking his best. The Boxer tends to be a clean dog, needing a bath only occasionally. His nails should be trimmed at least once a month unless naturally worn down on a hard surface, and to prevent tartar buildup his teeth should be brushed often daily if possible.\n\nThe Boxer can be fawn, brindle or red. The brindle variety has black stripes on a golden-yellow or red-brown background. It can often have a white underbelly and white on the front, face and feet. Some puppies are born all or mostly white.",
          source: [
            "https://www.akc.org/dog-breeds/boxer/",
            "https://dogsvictoria.org.au/family-pet/dogs-and-puppies/buying-a-puppy/breed-information-and-registered-breeders/boxer/",
          ]
        }
      },
    },
    {
      title: "Whippet",
      slug: "whippet",
      description: "This quiz is aimed at teaching the wider community about the Whippet. Provide your feedback on the information in this quiz!",
      imageFile: image012,
    //   category: "dog-breeds",
    },
    {
      title: "Bichon Frise",
      slug: "bichon-frise",
      description: "This quiz is aimed at teaching the wider community about the Bichon Frise. Provide your feedback on the information in this quiz!",
      imageFile: image013,
      category: "dog-breeds",
      quizUrl: "https://docs.google.com/forms/d/e/1FAIpQLScsRUikGlviNEGpPzp9Q7G4uK446nkurjnyCpiH-qe28grziQ/viewform",
      sections: {
        "origin": {
          text: "As with many dog breeds, the exact origin of the Bichon Frise is uncertain. The Bichon Frise was extremely popular and much doted on in the times of French Royalty. Dogs resembling the breed appear in paintings of the 17th and 18th century in the company of Lords and Ladies. When the French Royalty fell from favour, so too did these little dogs. The aristocratic Bichon Frise became the people’s Bichon Frise, accompanying organ players and entertaining passers-by with his clown-like antics and captivating expression. Almost wiped out during the First World War, it was only the dedication of those early breeders in France and Belgium that kept the breed alive. And how grateful are we today that they did.",
          source: "https://dogsvictoria.org.au/family-pet/dogs-and-puppies/buying-a-puppy/breed-information-and-registered-breeders/bichon-frise/",
        },
        "fun-fact": {
          text: "Bichons are a member of the clan of little white dogs formally known as Barbichon types. (These also include the Bolognese, Havanese, and Maltese) It is thought that these ancient breeds began their modern development on Tenerife, the largest of the Canary Islands. One of these breeds became so popular with the island’s sailors that it was known as the Bichon Tenerife, the primary ancestor of today’s Bichon Frise.",
          source: "https://www.akc.org/dog-breeds/bichon-frise/",
        },
        "behaviour": {
          text: "A cheerful attitude is the outstanding trait of the Bichon's personality. This dog loves to be loved, enjoys being the center of attention, and is adept at charming his family, neighbors, groomer, or veterinarian with his winning personality. The Bichon has a playful, independent streak, and likes to be in the company of people. They socialise well and are fine in the company of other dogs and pets in the household.",
          source: "https://dogtime.com/dog-breeds/bichon-frise#/slide/1",
        },
        "health": {
          text: "Bichons are generally healthy dogs, but can be susceptible to health conditions such as allergies, bladder infections, luxating patella (knee dislocation), and cataracts and other eye diseases. Bichons may experience early tooth loss or complications from gum infection if dental care and regular tooth brushing are not a priority. To avoid ear infections, regular ear cleaning is recommended.\n\nIt is important to look out for all signs of illness in your pup. Learn more about what the signs are in our Health module.",
          source: "https://www.akc.org/dog-breeds/bichon-frise/"
        },
        "exercise": {
          text: "All breeds require daily exercise, and the Bichon Frise is no different. Long stretches of calm are interspersed with brief bursts of high activity, often just running through the house or around the yard. Daily play sessions, in addition to walks, are required. Another dog can be a fine exercise companion, but the Bichon will still need quality playtime with his owner. A fenced-in backyard is a good idea; Bichons are surprisingly fast, and if one makes a dash for freedom, he may be difficult to catch or to call back to you. Many Bichons enjoy participating in obedience, agility, and rally competitions.",
          source: "https://www.akc.org/dog-breeds/bichon-frise/",
        },
        "training": {
          text: "As with all breeds, early socialization and puppy training classes are recommended. Bichons have a reputation for being difficult to housebreak. In every other respect, however, they are very easy to train. For example, Bichons love to perform tricks and learn new ones quickly. They respond very well to training based on positive rewards, rather than harsh or negative methods. A Bichon needs to be with his family, and undesirable behaviors are likely to result if he is regularly left alone for long periods of time.",
          source: "https://www.akc.org/dog-breeds/bichon-frise/",
        },
        "grooming": {
          text: "The Bichon is a white dog with black pigmentation who stands about 27cms at the shoulder. When presented for show, they have a wonderful ‘powder puff’ appearance, being scissored in a rounded off shape all over. With their gorgeous head furnishings, dark sparking eyes and the intense black pigmentation of the nose and eye rims, they have the most appealing little faces. The plumed tail carried gracefully over their back is another breed characteristic.\n\nThe Bichon Frise is a curly coated breed, which has minimal shedding, so require regular grooming. The coat needs to be thoroughly brushed 2 to 3 times per week and bathed every week or so. Owners need to be vigilant in ensuring nails are trimmed and ears and kept clean. Another option is to visit a professional groomer every 2 to 8 weeks, which would include the clipping and trimming of their coat.\n\nThe Bichon Frise is suitable for anyone who wants a fun and loving companion, provided you are prepared to do some regular work maintaining their coat. They are suitable for people with allergies as they are considered to be low allergy dogs, but if this is a concern for you, make sure you spend some time with a Bichon Frise to make sure he is suitable for you.",
          source: "https://dogsvictoria.org.au/family-pet/dogs-and-puppies/buying-a-puppy/breed-information-and-registered-breeders/bichon-frise/"
        }
      },
    },
    {
      title: "Cocker Spaniel",
      slug: "cocker-spaniel",
      description: "This quiz is aimed at teaching the wider community about the Cocker Spaniel. Provide your feedback on the information in this quiz!",
      imageFile: image015,
    //   category: "dog-breeds",
    },
    {
      title: "Scottish Terrier",
      slug: "scottish-terrier",
      description: "This quiz is aimed at teaching the wider community about the Scottish Terrier. Provide your feedback on the information in this quiz!",
      imageFile: image016,
      category: "dog-breeds",
      sections: {
        "origin": {
          text: "Until 1859 no mention of this breed was recorded, and yet in that year, Scotties where exhibited as a pure breed, albeit under the name of 'Aberdeen Terrier', the area in which they were mostly bred. It is certain, however, that the West Highland White and Scotties are closely related. These dogs were used to extract vermin from rocks, rats from under the earth and other pests from barns.",
          source: "https://www.purina.com.au/en/dogs/breeds/scottish-terrier#.YS3LY9Mza3I",
        },
        "fun-fact": {
          text: "A solidly compact dog of vivid personality, the Scottish Terrier is an independent, confident companion of high spirits. Scotties have a dignified, almost-human character. Their terrier persistence has earned the breed the nickname 'the Diehard.'",
          source: "https://www.akc.org/dog-breeds/scottish-terrier/",
        },
        "behaviour": {
          text: "Scotties think they are large dogs and have the boldness and courage to match. To outsiders Scotties appear somewhat morose and serious but to their family and friends they are affectionate and cheerful. Children must be taught that these dogs are not toys and to give them the respect they deserve.",
          source: "https://www.purina.com.au/en/dogs/breeds/scottish-terrier#.YS3LY9Mza3I",
        },
        "health": {
          text: "The Scottish Terrier is fortunate to have few serious genetic problems. Some shared genetic problems seen occasionally are Von Willebrand’s Disease, a common bleeding disorder that interferes with the blood's ability to clot. It is now being carefully managed by genetic testing.\n\nCushing’s Disease is another disease to be aware of. It happens when your dog’s body makes too much of a hormone called cortisol. This chemical helps them to respond to stress, control their weight, fight infections, and keep their blood sugar levels in check. But too much or too little of it can cause problems.\n\nFinally, Scottie Cramp – intermittent spasms in the limbs, back and tail cause the muscles to become rigid.",
          source: [
            "https://dogsqueensland.org.au/Breeds/browse-all-breeds/82/Scottish-Terrier/",
            "https://pets.webmd.com/dogs/cushings-syndrome-dogs#",
            "https://dogtime.com/dog-breeds/scottish-terrier#/slide/1",
            "https://www.purina.com.au/en/dogs/breeds/scottish-terrier#.YS3LY9Mza3I",
          ]
        },
        "exercise": {
          text: "Scottish Terriers need a good walk, but also good playtime. They have high energy and need to expend some of that in bursts. Throwing a ball or toy around that they can chase works great. Play tug with a favorite toy to see they won't stop or let go until you do. All of that activity will keep them in good shape and attitude.\n\nScotties like water but can't swim, and that's a bad conflict. They sink like a stone because of their short legs and heavy body. They should be able to enjoy some activities like going to the beach under strict supervision from their owner, however avoid other water areas such as pools, lakes and rivers.",
          source: "https://www.akc.org/dog-breeds/scottish-terrier/",
        },
        "training": {
          text: "Scottish Terriers do best with training sessions not lasting more than 15 minutes at a time. Be creative, and do not repeat the training the same way all the time. This breed is a thinker, and if they get bored, they will not respond. Remember, the farmers kept the dogs who could figure things out, not the ones who had to be told what to do. Don't be surprised when they test you. There is an independent streak in them. That is best focused when you make it seem like it is their idea to do something. They respond greatly to vocal tones and know why you are displeased by your voice. Just be persistent, and reward good behaviour.",
          source: "https://www.akc.org/dog-breeds/scottish-terrier/",
        },
        "grooming": {
          text: "Scotties are small and compact in appearance. Definitely not light for their size, they are short-legged, thick-set and muscular. They do have great power and activity in a small compass. They have pricked ears and their long heads are finished with a beard. Their tails are set at twelve o’clock. They are very agile and active dogs in spite of their short legs.\n\nScotties come in various colours ranging from black, brindle (black brindle, silver brindle, red brindle) to wheaten. They have a double coat with a soft undercoat and a harsh, coarse, topcoat.\n\nBeing double coated, Scotties will shed quite a lot of hair.\n\nPet Scottish Terriers should be trimmed using clippers and scissors about four times a year. Show dogs’ coats are hand stripped to maintain the harsh double coat, and this is usually required two or three times a year.",
          source: [
            "https://dogsvictoria.org.au/family-pet/dogs-and-puppies/buying-a-puppy/breed-information-and-registered-breeders/scottish-terrier/",
            "https://dogsqueensland.org.au/Breeds/browse-all-breeds/82/Scottish-Terrier/"
          ]
        }
      },
      quizUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeNSkaS7rrXvuW35-kH7nQIwiqt6HxbM_M5TINpzB5JIZsG2Q/viewform?usp=sf_link",
    },
    {
      title: "Dachshund",
      slug: "dachshund",
      description: "This quiz is aimed at teaching the wider community about the Dachshund. Provide your feedback on the information in this quiz!",
      imageFile: image018,
    //   category: "dog-breeds",
    },
];