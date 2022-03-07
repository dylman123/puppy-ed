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
          source: "https://frenchbulldogclub.org/history/ & https://www.purina.com.au/en/dogs/breeds/french-bulldog#.YHY3_bQza3I",
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
    //   category: "dog-breeds",
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
    //   category: "dog-breeds",
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