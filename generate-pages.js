const fs = require("fs");
const path = require("path");

const siteUrl = "https://www.rtiautolocksmith.co.uk";
const phone = "+44 7850 671304";
const email = "rtiautolocksmith@gmail.com";

const cities = [
  "Liverpool",
  "Manchester",
  "Preston",
  "Wigan",
  "Bolton",
  "Blackburn",
  "Chorley",
  "St Helens",
  "Southport",
  "Blackpool",
  "Warrington",
  "Burnley",
  "Bury",
  "Rochdale",
  "Oldham",
  "Stockport",
  "Salford",
  "Widnes",
  "Ormskirk",
  "Leyland",
  "Skelmersdale",
  "Lancaster",
  "Morecambe",
  "Accrington",
  "Darwen",
  "Fleetwood",
  "Lytham St Annes",
  "Ashton-under-Lyne",
  "Birkenhead",
  "Wallasey",
  "Bootle",
  "Huyton",
  "Knowsley",
  "Kirkby",
  "Formby",
  "Crosby",
  "Runcorn",
  "Halewood",
  "Leigh",
  "Atherton",
  "Horwich",
  "Farnworth",
  "Nelson",
  "Colne",
  "Rawtenstall",
  "Bacup",
  "Haslingden",
  "Clitheroe",
  "Poulton-le-Fylde",
  "Cleveleys"
];

function slugify(city) {
  return city
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function pickVariant(list, city) {
  const index = city.length % list.length;
  return list[index](city);
}

const introVariants = [
  (city) => `Need a reliable auto locksmith in ${city}? RTi Auto Locksmith provides fast mobile support for lost car keys, spare keys, car key programming, ignition problems and emergency vehicle unlocking across ${city} and nearby areas.`,
  (city) => `Looking for a trusted auto locksmith in ${city}? RTi Auto Locksmith offers mobile help with car key replacement, lockouts, ignition faults and key programming throughout ${city} and surrounding locations.`,
  (city) => `RTi Auto Locksmith provides professional mobile auto locksmith services in ${city}, including lost car key replacement, spare keys, programming and emergency vehicle access support.`,
  (city) => `If you need an experienced mobile auto locksmith in ${city}, RTi Auto Locksmith can assist with car keys, ignition issues, lockouts and selected vehicle electronic services.`
];

const supportVariants = [
  () => `We work with many vehicle makes and models and aim to provide a practical, responsive and professional service when you need help most.`,
  () => `Our goal is to help drivers get back on the road quickly with reliable locksmith support for everyday key, lock and ignition problems.`,
  () => `Whether you use your vehicle for work, family travel or daily commuting, we understand how important fast and dependable support can be.`,
  () => `We aim to provide straightforward mobile assistance with key cutting, programming, vehicle entry and selected electronic fault support.`
];

const whyChooseVariants = [
  (city) => `RTi Auto Locksmith provides practical mobile auto locksmith support for drivers in ${city} and surrounding areas. Our goal is to help you get back on the road quickly with reliable key, lock and vehicle electronic services.`,
  (city) => `Drivers in ${city} choose RTi Auto Locksmith for responsive mobile service, practical experience and support with a wide range of car key and ignition problems.`,
  (city) => `If you need a dependable auto locksmith in ${city}, RTi Auto Locksmith offers mobile support designed to solve key, lock and vehicle access problems quickly and professionally.`,
  (city) => `RTi Auto Locksmith supports customers across ${city} with mobile auto locksmith services focused on reliability, clear communication and fast practical help.`
];

const nearbyVariants = [
  (city) => `In addition to ${city}, we may also cover surrounding locations depending on distance and availability. Contact us with your postcode and vehicle details and we will confirm whether we can attend your area.`,
  (city) => `We may also assist in areas near ${city} where travel distance and availability allow. Send your location and vehicle details and we will confirm coverage.`,
  (city) => `RTi Auto Locksmith may cover nearby towns and areas around ${city} depending on current workload, location and vehicle type.`,
  (city) => `If you are just outside ${city}, contact us with your postcode and vehicle details and we will advise whether mobile assistance is available in your area.`
];

const contactVariants = [
  (city) => `Looking for a trusted auto locksmith in ${city}? Call us now for help with lost car keys, key programming, lockouts and ignition problems.`,
  (city) => `Need mobile auto locksmith support in ${city}? Contact RTi Auto Locksmith for help with keys, lockouts, ignition faults and selected vehicle electronic services.`,
  (city) => `If you need car key replacement, key programming or emergency vehicle unlocking in ${city}, contact RTi Auto Locksmith today.`,
  (city) => `For fast mobile auto locksmith assistance in ${city}, contact RTi Auto Locksmith with your vehicle details and location.`
];

const cityAreas = {
  Liverpool: ["Bootle", "Huyton", "Kirkby"],
  Manchester: ["Salford", "Stretford", "Stockport"],
  Preston: ["Fulwood", "Leyland", "Bamber Bridge"],
  Wigan: ["Leigh", "Hindley", "Standish"],
  Bolton: ["Farnworth", "Horwich", "Westhoughton"],
  Blackburn: ["Darwen", "Accrington", "Rishton"],
  Chorley: ["Adlington", "Buckshaw Village", "Euxton"],
  "St Helens": ["Haydock", "Rainhill", "Newton-le-Willows"],
  Southport: ["Birkdale", "Ainsdale", "Churchtown"],
  Blackpool: ["Bispham", "Cleveleys", "Poulton-le-Fylde"],
  Warrington: ["Lymm", "Great Sankey", "Widnes"],
  Burnley: ["Padiham", "Nelson", "Colne"],
  Bury: ["Prestwich", "Radcliffe", "Whitefield"],
  Rochdale: ["Littleborough", "Milnrow", "Heywood"],
  Oldham: ["Chadderton", "Royton", "Failsworth"],
  Stockport: ["Cheadle", "Marple", "Hazel Grove"],
  Salford: ["Eccles", "Swinton", "Pendlebury"],
  Widnes: ["Runcorn", "Hale", "Farnworth"],
  Ormskirk: ["Burscough", "Skelmersdale", "Aughton"],
  Leyland: ["Farington", "Lostock Hall", "Bamber Bridge"],
  Skelmersdale: ["Ormskirk", "Rainford", "Upholland"],
  Lancaster: ["Morecambe", "Carnforth", "Heysham"],
  Morecambe: ["Heysham", "Lancaster", "Bare"],
  Accrington: ["Oswaldtwistle", "Church", "Great Harwood"],
  Darwen: ["Blackburn", "Hoddlesden", "Belmont"],
  Fleetwood: ["Cleveleys", "Poulton-le-Fylde", "Blackpool"],
  "Lytham St Annes": ["Ansdell", "Blackpool", "Poulton-le-Fylde"],
  "Ashton-under-Lyne": ["Dukinfield", "Stalybridge", "Droylsden"],
  Birkenhead: ["Wallasey", "Bebington", "Eastham"],
  Wallasey: ["Birkenhead", "New Brighton", "Liscard"],
  Bootle: ["Crosby", "Litherland", "Liverpool"],
  Huyton: ["Kirkby", "Prescot", "Liverpool"],
  Knowsley: ["Huyton", "Kirkby", "Prescot"],
  Kirkby: ["Huyton", "Knowsley", "Liverpool"],
  Formby: ["Crosby", "Southport", "Ainsdale"],
  Crosby: ["Bootle", "Waterloo", "Formby"],
  Runcorn: ["Widnes", "Frodsham", "Warrington"],
  Halewood: ["Huyton", "Liverpool", "Prescot"],
  Leigh: ["Wigan", "Atherton", "Tyldesley"],
  Atherton: ["Leigh", "Tyldesley", "Wigan"],
  Horwich: ["Bolton", "Blackrod", "Westhoughton"],
  Farnworth: ["Bolton", "Walkden", "Little Lever"],
  Nelson: ["Burnley", "Colne", "Brierfield"],
  Colne: ["Nelson", "Barnoldswick", "Burnley"],
  Rawtenstall: ["Haslingden", "Bacup", "Ramsbottom"],
  Bacup: ["Rawtenstall", "Todmorden", "Haslingden"],
  Haslingden: ["Rawtenstall", "Accrington", "Bacup"],
  Clitheroe: ["Whalley", "Longridge", "Accrington"],
  "Poulton-le-Fylde": ["Blackpool", "Cleveleys", "Fleetwood"],
  Cleveleys: ["Fleetwood", "Blackpool", "Poulton-le-Fylde"]
};

function cityPageTemplate(city) {
  const slug = slugify(city);
  const filename = `${slug}-auto-locksmith.html`;
  const canonical = `${siteUrl}/${filename}`;
  const title = `${city} Auto Locksmith | Car Key Replacement ${city} | RTi Auto Locksmith`;
  const description = `Professional auto locksmith in ${city}. Car key replacement, car key programming, ignition repair and emergency unlocking across ${city} and surrounding areas.`;

  const introText = pickVariant(introVariants, city);
  const supportText = pickVariant(supportVariants, city);
  const whyChooseText = pickVariant(whyChooseVariants, city);
  const nearbyText = pickVariant(nearbyVariants, city);
  const contactText = pickVariant(contactVariants, city);
  const localAreas = cityAreas[city] || ["nearby towns", "surrounding areas", "local locations"];

  return {
    filename,
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#FFCC00" />

  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="en-GB" href="${canonical}" />
  <link rel="alternate" hreflang="x-default" href="${canonical}" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />

  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>

  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="${siteUrl}/images/logo.png" />
  <meta property="og:image:alt" content="RTi Auto Locksmith logo" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": "RTi Auto Locksmith",
    "url": "${canonical}",
    "telephone": "${phone.replace(/\s/g, "")}",
    "email": "${email}",
    "areaServed": {
      "@type": "City",
      "name": "${city}"
    },
    "image": "${siteUrl}/images/logo.png",
    "description": "${description}"
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide lost car key replacement in ${city}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, RTi Auto Locksmith can assist with lost car key replacement in ${city} for many vehicle makes and models, depending on the key type and system."
        }
      },
      {
        "@type": "Question",
        "name": "Can you unlock my vehicle if the keys are locked inside?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide emergency vehicle unlocking support in ${city} and nearby areas where available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with vans and motorcycles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We may also assist with van key replacement, van key programming and selected motorcycle key services depending on the vehicle."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ECU repair, remap or cloning in ${city}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We may assist with selected ECU repair, ECU remap and cloning services depending on the make, model and system type."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide mileage correction or dashboard calibration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We may provide support for mileage correction and dashboard calibration where legally permitted and technically suitable for the vehicle system."
        }
      }
    ]
  }
  </script>
</head>
<body>
  <main class="city-page">
    <section class="hero city-hero">
      <div class="hero-logo">
        <img src="images/logo.png" alt="RTi Auto Locksmith Logo" class="logo-left" />
      </div>

      <h1>${city} Auto Locksmith</h1>

      <h2>24/7 Mobile Car Key Replacement, Programming and Emergency Unlocking in ${city}</h2>
      <p>${introText}</p>
      <p>${supportText}</p>

      <p><strong>Call now:</strong> <a href="tel:+447850671304">+44 7850 671304</a></p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>

      <div class="cta-buttons">
        <a href="tel:+447850671304" class="btn primary-call">Call Now</a>
        <a href="https://wa.me/447850671304" target="_blank" rel="noopener" class="btn whatsapp-btn">WhatsApp Us</a>
      </div>
    </section>

    <section class="section-fade-left">
      <h2>Mobile Auto Locksmith Services in ${city}</h2>
      <p>
RTi Auto Locksmith provides mobile auto locksmith services in ${city} for cars,
vans and motorcycles. We help drivers who have lost their keys,
broken a key, locked keys inside the vehicle or need a spare key cut and programmed.
</p>

<p>
Our services may include car key replacement, van key replacement,
car and van key programming, ignition repair and emergency vehicle unlocking.
We work with many types of vehicles including cars, light commercial vans
and motorcycle key systems.
</p>

<p>
If you use your vehicle for work or daily travel, we understand how important
it is to get back on the road quickly. Our mobile locksmith service is designed
to support drivers across ${city} and surrounding areas.
</p>
    </section>

    <section class="section-fade-left">
      <h2>Car Key Replacement in ${city}</h2>
      <p>
        Lost your only car key? Damaged your remote? Need a replacement key for a used vehicle?
        We provide car key replacement services in ${city} for many types of vehicles, including
        cars, vans and motorcycles.
      </p>
      <p>
        Our replacement key service can include key cutting, transponder chip programming and remote
        fob setup depending on the vehicle. If you want to avoid future emergencies, we can also help
        with spare key solutions.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Car Key Programming ${city}</h2>
      <p>
        Modern vehicles often require specialist key programming. RTi Auto Locksmith provides car key
        programming in ${city} for transponder keys, remote keys and smart key systems.
      </p>
      <p>
        If you already have a blank key, replacement remote or additional key that needs coding,
        we may be able to program it and test that it works correctly with your vehicle.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Emergency Vehicle Unlocking in ${city}</h2>
      <p>
        If you are locked out of your vehicle in ${city}, we provide emergency auto locksmith support
        to help you regain access quickly. We understand how stressful it is to be locked out when you
        are away from home, at work or travelling with family.
      </p>
      <p>
        Our aim is to open vehicles carefully and professionally without unnecessary damage. If your
        lockout is connected to a lost, broken or non-working key, we can also advise on the next step.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Ignition Repair in ${city}</h2>
      <p>
        Ignition problems can start with small warning signs such as a key sticking, turning roughly,
        or refusing to turn at all. We provide ignition repair support in ${city} for many common issues
        affecting ignition barrels and worn keys.
      </p>
      <p>
        If your key is jammed in the ignition or the barrel feels damaged, contact us before the problem
        becomes worse. Early repair can often prevent a full breakdown situation.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>ECU Repair, Remap and Cloning in ${city}</h2>
      <p>
        RTi Auto Locksmith provides support for selected ECU repair, ECU remap and ECU
        cloning services in ${city}. Modern vehicles rely on electronic control units for
        engine management, immobiliser communication and other key systems, so faults in these
        units can cause serious starting and performance issues.
      </p>

      <p>
        In some cases, we may assist with ECU cloning, data transfer, module matching and
        selected remap-related work depending on the vehicle make, model and existing fault.
        This can be especially helpful when original units are damaged or when replacement
        components need to be configured correctly.
      </p>

      <p>
        If your vehicle has immobiliser problems, ECU communication faults or requires ECU
        remap or cloning support in ${city}, contact RTi Auto Locksmith with full vehicle
        details and we will advise on available options.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Mileage Correction and Dashboard Calibration in ${city}</h2>

      <p>
        RTi Auto Locksmith may also assist with mileage correction and dashboard
        calibration services in ${city} where legally permitted and appropriate.
        Modern vehicles store mileage data in instrument clusters and electronic
        control units, and these values may sometimes need adjustment after
        dashboard replacement, ECU replacement or module repair.
      </p>

      <p>
        Mileage correction services may involve recalibrating the instrument
        cluster or synchronising mileage data between vehicle modules. This can
        help ensure that the displayed mileage matches the correct system data
        following component replacement or electronic repair.
      </p>

      <p>
        If you require mileage correction, odometer calibration or instrument
        cluster support in ${city}, contact RTi Auto Locksmith with your vehicle
        make, model and year and we will confirm whether assistance is available.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Van and Motorcycle Key Services in ${city}</h2>
      <p>
RTi Auto Locksmith may also assist with van key replacement and programming
in ${city}. Vans are essential for many businesses and losing a key can stop
work completely, so we aim to provide practical solutions where possible.
</p>

<p>
In some cases we may also help with motorcycle key replacement or spare key
solutions depending on the vehicle make and key type.
</p>
    </section>

    <section class="section-fade-left">
      <h2>Why Choose RTi Auto Locksmith in ${city}</h2>

      <p>${whyChooseText}</p>

      <ul>
        <li>Mobile auto locksmith service across ${city}</li>
        <li>Lost car key replacement and spare keys</li>
        <li>Car key programming and transponder key coding</li>
        <li>Emergency vehicle unlocking service</li>
        <li>Ignition repair and ignition lock support</li>
        <li>Van and motorcycle key assistance</li>
        <li>ECU repair, remap and cloning support</li>
        <li>Mileage correction and dashboard calibration</li>
        <li>Coverage across ${city} and nearby towns</li>
      </ul>

      <p>
        If you need a reliable auto locksmith in ${city}, contact RTi Auto Locksmith
        with your vehicle details and location and we will confirm availability in
        your area.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Areas Near ${city} We May Cover</h2>
      <p>${nearbyText}</p>

      <p>
        We may also cover nearby places such as <strong>${localAreas[0]}</strong>,
        <strong>${localAreas[1]}</strong> and <strong>${localAreas[2]}</strong>,
        depending on distance and availability.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Auto Locksmith Near ${city}</h2>

      <p>
        If you are searching for an auto locksmith near ${city}, RTi Auto Locksmith
        provides mobile support for drivers across the area. Whether you are at home,
        at work, in a car park or stranded on the roadside, we aim to help you regain
        access to your vehicle quickly and safely.
      </p>

      <p>
        Many customers contact us when searching online for services such as
        <strong>auto locksmith near me</strong>,
        <strong>car key replacement near me</strong> or
        <strong>emergency vehicle unlocking near me</strong>.
        Our mobile service is designed to respond to these situations across ${city}
        and nearby towns.
      </p>

      <p>
        If you have lost your car key, locked your keys inside your vehicle or need
        a spare key programmed, contact RTi Auto Locksmith to check availability
        in ${city} and surrounding areas.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Nearby Auto Locksmith Areas</h2>

      <p>
        RTi Auto Locksmith also covers nearby towns and surrounding areas where
        availability allows. If you are looking for an auto locksmith near ${city},
        you may also find help in nearby locations across the North West.
      </p>

      <ul class="nearby-links">
        <li><a href="/liverpool-auto-locksmith.html">Liverpool Auto Locksmith</a></li>
        <li><a href="/manchester-auto-locksmith.html">Manchester Auto Locksmith</a></li>
        <li><a href="/preston-auto-locksmith.html">Preston Auto Locksmith</a></li>
        <li><a href="/wigan-auto-locksmith.html">Wigan Auto Locksmith</a></li>
        <li><a href="/bolton-auto-locksmith.html">Bolton Auto Locksmith</a></li>
        <li><a href="/blackburn-auto-locksmith.html">Blackburn Auto Locksmith</a></li>
        <li><a href="/chorley-auto-locksmith.html">Chorley Auto Locksmith</a></li>
        <li><a href="/blackpool-auto-locksmith.html">Blackpool Auto Locksmith</a></li>
      </ul>
    </section>

    <section class="section-fade-left">
      <h2>Frequently Asked Questions</h2>

      <div class="faq-item">
        <h3>Do you provide lost car key replacement in ${city}?</h3>
        <p>
          Yes, RTi Auto Locksmith can assist with lost car key replacement in ${city}
          for many vehicle makes and models, depending on the key type and system.
        </p>
      </div>

      <div class="faq-item">
        <h3>Can you unlock my vehicle if the keys are locked inside?</h3>
        <p>
          Yes, we provide emergency vehicle unlocking support in ${city} and nearby
          areas where available.
        </p>
      </div>

      <div class="faq-item">
        <h3>Do you work with vans and motorcycles?</h3>
        <p>
          We may also assist with van key replacement, van key programming and
          selected motorcycle key services depending on the vehicle.
        </p>
      </div>

      <div class="faq-item">
        <h3>Do you offer ECU repair, remap or cloning in ${city}?</h3>
        <p>
          We may assist with selected ECU repair, ECU remap and cloning services
          depending on the make, model and system type.
        </p>
      </div>

      <div class="faq-item">
        <h3>Do you provide mileage correction or dashboard calibration?</h3>
        <p>
          We may provide support for mileage correction and dashboard calibration
          where legally permitted and technically suitable for the vehicle system.
        </p>
      </div>
    </section>

    <section class="section-fade-left contact-card">
      <h2>Contact RTi Auto Locksmith</h2>

      <p class="contact-intro">${contactText}</p>

      <div class="contact-details">
        <p><span>Phone:</span> <a href="tel:+447850671304">${phone}</a></p>
        <p><span>Email:</span> <a href="mailto:${email}">${email}</a></p>
      </div>

      <div class="contact-actions">
        <a href="tel:+447850671304" class="btn primary-call">Call Now</a>
        <a href="https://wa.me/447850671304" target="_blank" rel="noopener" class="btn whatsapp-btn">WhatsApp Us</a>
        <a href="/" class="back-link">Back to homepage</a>
      </div>
    </section>
  </main>
</body>
</html>`
  };
}

function generatePages() {
  cities.forEach((city) => {
    const page = cityPageTemplate(city);
    fs.writeFileSync(path.join(__dirname, page.filename), page.content, "utf8");
    console.log(`Generated: ${page.filename}`);
  });
}

function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    `  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
  ];

  cities.forEach((city) => {
    const slug = slugify(city);
    urls.push(`  <url>
    <loc>${siteUrl}/${slug}-auto-locksmith.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap, "utf8");
  console.log("Generated: sitemap.xml");
}

generatePages();
generateSitemap();