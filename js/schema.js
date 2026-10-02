/**
 * Structured Data: Combined Schema (VideoGame, FAQPage, BreadcrumbList)
 * Automatically injects JSON-LD into the document head
 */
(function () {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoGame",
        "name": "Swing Monkey",
        "alternateName": [
          "Swing Monkey Unblocked",
          "Monkey Swing Game",
          "Monkey Swing"
        ],
        "description": "Swing Monkey is an exhilarating physics-based arcade swinging game. Tap and hold to attach vines to wooden pegs, gain aerial momentum, bounce on trampolines, and race to the jungle finish line.",
        "url": "https://swing-monkey.github.io/",
        "image": "https://swing-monkey.github.io/images/swing-monkey-unblocked.jpg",
        "genre": [
          "Arcade",
          "Physics Game",
          "Platformer",
          "Skill Game"
        ],
        "gamePlatform": [
          "Web Browser",
          "Chromebook",
          "Desktop",
          "Mobile"
        ],
        "applicationCategory": "Game",
        "operatingSystem": "Any",
        "inLanguage": "en",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5.0",
          "ratingCount": "1840"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Swing Monkey Unblocked?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Swing Monkey Unblocked is a popular physics-based browser game where you control an agile monkey swinging through dense jungle levels. Tap to attach your vine to wooden pegs, build momentum, bounce on trampolines, and reach the finish line safely without falling."
            }
          },
          {
            "@type": "Question",
            "name": "How do you play the Monkey Swing Game?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Playing Swing Monkey is intuitive: Click and hold (or tap and hold on touchscreens) to attach a swinging vine to the nearest peg. Release your click or tap to let go and soar through the air. Time your release at an upward 45-degree angle for maximum speed and distance!"
            }
          },
          {
            "@type": "Question",
            "name": "Can I play Swing Monkey Game unblocked on school Chromebooks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Swing Monkey Unblocked runs directly in any modern web browser using HTML5. It requires no installation, plugins, or flash, making it 100% playable on school Chromebooks, library PCs, tablets, and smartphones."
            }
          },
          {
            "@type": "Question",
            "name": "Is Swing Monkey Game free to play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Swing Monkey is completely free to play online with unlimited access to all jungle levels and character skins."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://swing-monkey.github.io/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Arcade Games",
            "item": "https://swing-monkey.github.io/#hot-games"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Swing Monkey Unblocked",
            "item": "https://swing-monkey.github.io/"
          }
        ]
      }
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
})();
