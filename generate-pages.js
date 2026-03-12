const fs = require("fs");
const path = require("path");

const siteUrl = "https://www.rtiautolocksmith.co.uk";
const phone = "+44 7850 671304";
const phoneHref = "+447850671304";
const whatsappUrl = "https://wa.me/447850671304";
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

const services = [
  {
    name: "Car Key Replacement",
    slug: "car-key-replacement",
    shortName: "car key replacement",
    titleTemplate: (city) =>
      `Car Key Replacement ${city} | Lost Car Keys ${city} | RTi Auto Locksmith`,
    descriptionTemplate: (city) =>
      `Need car key replacement in ${city}? RTi Auto Locksmith provides lost car key replacement, spare car keys, remote key setup and transponder key support across ${city} and nearby areas.`,
    h1Template: (city) => `Car Key Replacement ${city}`,
    introTemplate: (city) =>
      `RTi Auto Locksmith provides professional car key replacement in ${city} for drivers who have lost their keys, damaged a key, need a spare key or require replacement remote key support.`,
    bodyTemplate: (city) => `
<section class="section-fade-left">
  <h2>Lost Car Key Replacement in ${city}</h2>
  <p>
    If you have lost your only car key in ${city}, RTi Auto Locksmith may be able to assist with
    replacement key solutions for many makes and models. Losing your only key can leave you stranded
    at home, at work or away from your normal route, so our goal is to provide practical mobile help
    as quickly as possible.
  </p>
  <p>
    Depending on the vehicle, the service may include vehicle entry, key cutting, transponder
    programming, remote setup and final testing to make sure the replacement key works correctly.
  </p>
</section>

<section class="section-fade-left">
  <h2>Spare Car Keys in ${city}</h2>
  <p>
    If you still have one working key, we can also help with spare car key solutions in ${city}.
    Having a spare key can help avoid future lockouts, reduce the cost of a full lost key situation
    and give extra peace of mind for families, businesses and fleet users.
  </p>
</section>

<section class="section-fade-left">
  <h2>Replacement Remote Keys in ${city}</h2>
  <p>
    Many vehicles use remote keys that combine blade cutting, immobiliser programming and remote
    locking functions. If your remote key casing is broken, the buttons have failed or the full
    key has been lost, we may be able to provide a suitable replacement solution in ${city}.
  </p>
</section>

<section class="section-fade-left">
  <h2>What to Prepare Before You Call</h2>
  <p>
    To help us confirm availability for car key replacement in ${city}, it is useful to provide
    the vehicle make, model, year, registration and a short description of the problem.
  </p>
</section>
`,
    faqItems: (city) => [
      {
        q: `Do you provide lost car key replacement in ${city}?`,
        a: `Yes, RTi Auto Locksmith may assist with lost car key replacement in ${city}, depending on the vehicle make, model, year and key system.`
      },
      {
        q: `Can you make a spare car key in ${city}?`,
        a: `Yes, if you still have one working key, we may be able to provide a spare car key solution in ${city} for many vehicles.`
      },
      {
        q: `Do you program replacement remote keys in ${city}?`,
        a: `Yes, depending on the vehicle system, we may be able to cut, program and test replacement remote keys in ${city}.`
      },
      {
        q: `What details do I need to give for car key replacement?`,
        a: `It helps to provide your vehicle registration, make, model, year and a short explanation of whether the key is lost, damaged or needs duplicating.`
      }
    ]
  },

  {
    name: "Car Key Programming",
    slug: "car-key-programming",
    shortName: "car key programming",
    titleTemplate: (city) =>
      `Car Key Programming ${city} | Key Coding ${city} | RTi Auto Locksmith`,
    descriptionTemplate: (city) =>
      `Need car key programming in ${city}? RTi Auto Locksmith provides transponder key programming, remote key coding, spare key setup and selected smart key support across ${city} and nearby areas.`,
    h1Template: (city) => `Car Key Programming ${city}`,
    introTemplate: (city) =>
      `RTi Auto Locksmith provides car key programming in ${city} for replacement keys, spare keys, remote keys and selected smart key systems.`,
    bodyTemplate: (city) => `
<section class="section-fade-left">
  <h2>Transponder Key Programming in ${city}</h2>
  <p>
    Many modern vehicles require specialist key coding before a replacement key will start the vehicle.
    RTi Auto Locksmith provides transponder key programming in ${city} for many makes and models.
  </p>
  <p>
    Immobiliser systems are designed to prevent unauthorised starting, which means a new key often
    needs to be correctly matched to the vehicle before it can be used reliably.
  </p>
</section>

<section class="section-fade-left">
  <h2>Remote Key Coding in ${city}</h2>
  <p>
    If you have a new remote key, spare key or replacement fob that needs pairing, we may be able
    to program and test it in ${city} depending on the vehicle system.
  </p>
</section>

<section class="section-fade-left">
  <h2>Spare Key Setup in ${city}</h2>
  <p>
    Programming a spare key before you lose your only working key is often the most convenient
    and cost-effective option. We can often assist with additional key setup in ${city} for
    drivers who want a backup key for daily use, family members or business vehicles.
  </p>
</section>

<section class="section-fade-left">
  <h2>Why Key Coding Matters</h2>
  <p>
    A key that is cut correctly but not programmed properly may open the vehicle but fail to start it.
    Correct coding is an essential part of many replacement key jobs, especially for modern
    transponder and remote systems.
  </p>
</section>
`,
    faqItems: (city) => [
      {
        q: `Do you provide car key programming in ${city}?`,
        a: `Yes, RTi Auto Locksmith may assist with car key programming in ${city}, including transponder key coding and remote key setup, depending on the vehicle system.`
      },
      {
        q: `Can you program spare car keys in ${city}?`,
        a: `Yes, we may be able to program spare keys in ${city} if your vehicle system is supported.`
      },
      {
        q: `Will a new key start the car without programming?`,
        a: `In many cases, no. Modern vehicles often require the key chip or remote system to be programmed correctly before the vehicle will start.`
      },
      {
        q: `Do you cover nearby areas around ${city} for key programming?`,
        a: `Yes, we may also cover nearby towns and surrounding areas depending on distance and availability.`
      }
    ]
  },

  {
    name: "Ignition Repair",
    slug: "ignition-repair",
    shortName: "ignition repair",
    titleTemplate: (city) =>
      `Ignition Repair ${city} | Ignition Locksmith ${city} | RTi Auto Locksmith`,
    descriptionTemplate: (city) =>
      `Need ignition repair in ${city}? RTi Auto Locksmith provides help with stuck keys, worn ignition barrels, key turning issues and ignition lock faults across ${city} and nearby areas.`,
    h1Template: (city) => `Ignition Repair ${city}`,
    introTemplate: (city) =>
      `RTi Auto Locksmith provides ignition repair support in ${city} for stuck keys, worn ignition barrels and common ignition lock problems.`,
    bodyTemplate: (city) => `
<section class="section-fade-left">
  <h2>Ignition Locksmith Support in ${city}</h2>
  <p>
    If your key is hard to turn, stuck in the ignition or the ignition barrel feels worn,
    RTi Auto Locksmith may be able to help in ${city}. Ignition problems can become worse
    over time, so early diagnosis can often help avoid a full failure.
  </p>
</section>

<section class="section-fade-left">
  <h2>Stuck Car Key in Ignition in ${city}</h2>
  <p>
    Ignition problems often begin with small warning signs such as stiffness, intermittent turning,
    difficulty removing the key or the need to wiggle the key before the ignition responds.
  </p>
  <p>
    Early attention can help prevent complete failure and reduce the risk of further damage
    to the key or barrel.
  </p>
</section>

<section class="section-fade-left">
  <h2>Worn Ignition Barrels and Key Wear</h2>
  <p>
    Worn keys and worn ignition components often affect each other. A damaged key blade can place
    extra strain on the ignition, while a worn barrel can lead to sticking, slipping or failure
    to turn fully.
  </p>
</section>

<section class="section-fade-left">
  <h2>Mobile Help for Ignition Problems</h2>
  <p>
    We provide mobile support in ${city} and nearby areas where possible. Contact us with the
    vehicle make, model, year and a clear description of the ignition issue so we can advise
    on likely next steps.
  </p>
</section>
`,
    faqItems: (city) => [
      {
        q: `Do you provide ignition repair in ${city}?`,
        a: `Yes, RTi Auto Locksmith may assist with ignition repair in ${city}, including stuck keys, worn barrels and related ignition lock faults.`
      },
      {
        q: `What if my key is stuck in the ignition in ${city}?`,
        a: `We may be able to help with stuck key issues in ${city}. Contact us with your vehicle details and explain whether the key turns, sticks or cannot be removed.`
      },
      {
        q: `Can a worn car key cause ignition problems?`,
        a: `Yes, a worn or damaged key can contribute to ignition wear and may make the lock harder to turn over time.`
      },
      {
        q: `Do you cover nearby areas around ${city} for ignition repair?`,
        a: `Yes, we may also cover surrounding areas depending on distance and availability.`
      }
    ]
  },

  {
    name: "Emergency Vehicle Unlocking",
    slug: "emergency-vehicle-unlocking",
    shortName: "emergency vehicle unlocking",
    titleTemplate: (city) =>
      `Emergency Vehicle Unlocking ${city} | Car Lockout ${city} | RTi Auto Locksmith`,
    descriptionTemplate: (city) =>
      `Locked your keys in the car in ${city}? RTi Auto Locksmith provides emergency vehicle unlocking and mobile lockout support across ${city} and nearby areas.`,
    h1Template: (city) => `Emergency Vehicle Unlocking ${city}`,
    introTemplate: (city) =>
      `RTi Auto Locksmith provides emergency vehicle unlocking in ${city} for drivers who have locked keys inside the car or lost access to their vehicle.`,
    bodyTemplate: (city) => `
<section class="section-fade-left">
  <h2>Locked Keys in Car in ${city}</h2>
  <p>
    If your keys are locked inside the vehicle in ${city}, RTi Auto Locksmith may be able to help
    you regain access quickly and carefully. We understand how stressful lockout situations can be,
    especially in poor weather, late at night or when you are away from home.
  </p>
</section>

<section class="section-fade-left">
  <h2>Mobile Lockout Help in ${city}</h2>
  <p>
    We provide mobile support for vehicle lockouts across ${city} and nearby areas, depending on
    location and availability. Our aim is to regain access professionally without unnecessary damage.
  </p>
</section>

<section class="section-fade-left">
  <h2>When to Call for Emergency Vehicle Access</h2>
  <p>
    You may need emergency unlocking if the keys are inside the car, the remote has stopped responding,
    the lock has malfunctioned or access is blocked by a key-related problem.
  </p>
</section>

<section class="section-fade-left">
  <h2>What to Tell Us</h2>
  <p>
    Please provide your location, vehicle make, model and a short description of the situation
    so we can advise on likely availability and the type of help required.
  </p>
</section>
`,
    faqItems: (city) => [
      {
        q: `Do you unlock vehicles in ${city}?`,
        a: `Yes, RTi Auto Locksmith may assist with emergency vehicle unlocking in ${city}, depending on location and availability.`
      },
      {
        q: `What if I locked my keys in the car in ${city}?`,
        a: `Contact us with your location and vehicle details. We may be able to provide mobile lockout support in ${city}.`
      },
      {
        q: `Do you cover nearby areas around ${city} for lockouts?`,
        a: `Yes, we may also cover nearby towns and surrounding areas depending on distance and availability.`
      },
      {
        q: `Can you help if the remote key is not responding?`,
        a: `Depending on the fault and the vehicle system, we may be able to help with entry or advise on the next step.`
      }
    ]
  },

  {
    name: "Van Key Replacement",
    slug: "van-key-replacement",
    shortName: "van key replacement",
    titleTemplate: (city) =>
      `Van Key Replacement ${city} | Van Locksmith ${city} | RTi Auto Locksmith`,
    descriptionTemplate: (city) =>
      `Need van key replacement in ${city}? RTi Auto Locksmith provides replacement van keys, spare van keys and van key programming support across ${city} and nearby areas.`,
    h1Template: (city) => `Van Key Replacement ${city}`,
    introTemplate: (city) =>
      `RTi Auto Locksmith provides van key replacement in ${city} for lost keys, damaged keys, spare keys and selected van key programming support.`,
    bodyTemplate: (city) => `
<section class="section-fade-left">
  <h2>Replacement Van Keys in ${city}</h2>
  <p>
    If you have lost your van key, damaged the only working key or need a backup key for business use,
    RTi Auto Locksmith may be able to help in ${city}.
  </p>
</section>

<section class="section-fade-left">
  <h2>Spare Van Keys in ${city}</h2>
  <p>
    Spare van keys can be especially useful for business owners, delivery drivers and anyone who relies
    on a vehicle for daily work. We may be able to provide spare key support in ${city} for selected vans.
  </p>
</section>

<section class="section-fade-left">
  <h2>Van Key Programming Support</h2>
  <p>
    Many vans use transponder or remote key systems that need correct programming before the vehicle
    will start. Depending on the system, we may be able to assist with coding and testing.
  </p>
</section>

<section class="section-fade-left">
  <h2>What Details to Send</h2>
  <p>
    Please provide your van make, model, year, registration and whether the key is lost,
    damaged or still available for copying.
  </p>
</section>
`,
    faqItems: (city) => [
      {
        q: `Do you provide van key replacement in ${city}?`,
        a: `Yes, RTi Auto Locksmith may assist with van key replacement in ${city}, depending on the van make, model and key system.`
      },
      {
        q: `Can you make spare van keys in ${city}?`,
        a: `Yes, if your system is supported, we may be able to provide spare van key solutions in ${city}.`
      },
      {
        q: `Do van keys need programming?`,
        a: `Many modern van keys do require correct programming before the vehicle will start.`
      },
      {
        q: `Do you cover nearby areas around ${city} for van key services?`,
        a: `Yes, nearby towns and surrounding areas may also be covered depending on location and availability.`
      }
    ]
  },

  {
    name: "Motorcycle Key Assistance",
    slug: "motorcycle-key-assistance",
    shortName: "motorcycle key assistance",
    titleTemplate: (city) =>
      `Motorcycle Key Assistance ${city} | Bike Key Help ${city} | RTi Auto Locksmith`,
    descriptionTemplate: (city) =>
      `Need motorcycle key assistance in ${city}? RTi Auto Locksmith provides selected support for lost motorcycle keys, spare bike keys and key-related issues across ${city} and nearby areas.`,
    h1Template: (city) => `Motorcycle Key Assistance ${city}`,
    introTemplate: (city) =>
      `RTi Auto Locksmith provides selected motorcycle key assistance in ${city} for lost bike keys, damaged keys and spare key support where available.`,
    bodyTemplate: (city) => `
<section class="section-fade-left">
  <h2>Lost Motorcycle Keys in ${city}</h2>
  <p>
    If you have lost your motorcycle key in ${city}, contact RTi Auto Locksmith with the make,
    model and year so we can confirm whether support is available for your system.
  </p>
</section>

<section class="section-fade-left">
  <h2>Spare Bike Keys in ${city}</h2>
  <p>
    If you still have one working key, we may be able to assist with spare motorcycle key solutions
    depending on the bike and key type.
  </p>
</section>

<section class="section-fade-left">
  <h2>Selected Motorcycle Key Support</h2>
  <p>
    Motorcycle key work can vary widely depending on the manufacturer, lock type and immobiliser system.
    We provide selected support only, so please contact us with full details first.
  </p>
</section>

<section class="section-fade-left">
  <h2>Check Availability Before Sending or Booking</h2>
  <p>
    Availability for motorcycle key services depends on the make, model, year and the exact issue.
    Please provide as much information as possible when contacting us.
  </p>
</section>
`,
    faqItems: (city) => [
      {
        q: `Do you provide motorcycle key assistance in ${city}?`,
        a: `RTi Auto Locksmith provides selected motorcycle key assistance in ${city}, depending on the bike make, model, year and key system.`
      },
      {
        q: `Can you help with lost motorcycle keys?`,
        a: `In selected cases, yes. Please contact us with your motorcycle details so we can confirm availability.`
      },
      {
        q: `Can you make spare bike keys in ${city}?`,
        a: `If the system is supported and you still have a working key, we may be able to help with a spare key solution.`
      },
      {
        q: `Do you cover nearby areas around ${city} for motorcycle key help?`,
        a: `Yes, nearby areas may also be covered depending on location and availability.`
      }
    ]
  },

  {
    name: "ECU Services",
    slug: "ecu-services",
    shortName: "ECU services",
    titleTemplate: (city) =>
      `ECU Services ${city} | ECU Repair Remap Cloning ${city} | RTi Auto Locksmith`,
    descriptionTemplate: (city) =>
      `Need ECU services in ${city}? RTi Auto Locksmith provides selected ECU repair, ECU remap, ECU cloning and module-related support across ${city} and nearby areas.`,
    h1Template: (city) => `ECU Services ${city}`,
    introTemplate: (city) =>
      `RTi Auto Locksmith provides selected ECU services in ${city}, including ECU repair, remap, cloning and module-related support depending on the vehicle system.`,
    bodyTemplate: (city) => `
<section class="section-fade-left">
  <h2>ECU Repair in ${city}</h2>
  <p>
    If your vehicle has an ECU-related fault, communication issue or module problem, RTi Auto Locksmith
    may be able to provide selected support in ${city}, depending on the system and fault type.
  </p>
</section>

<section class="section-fade-left">
  <h2>ECU Cloning in ${city}</h2>
  <p>
    In some cases, ECU cloning may be relevant where a replacement unit needs to match the original data
    correctly. Availability depends on the vehicle make, model and control unit type.
  </p>
</section>

<section class="section-fade-left">
  <h2>ECU Remap Support</h2>
  <p>
    We may also assist with selected ECU remap services depending on the vehicle and intended work.
    Contact us first with the full vehicle details and the type of support required.
  </p>
</section>

<section class="section-fade-left">
  <h2>Module and Immobiliser-Related Support</h2>
  <p>
    Some key and immobiliser issues can also involve ECU or module-related faults. We may be able to
    advise whether the issue appears key-related, immobiliser-related or connected to another system.
  </p>
</section>
`,
    faqItems: (city) => [
      {
        q: `Do you provide ECU services in ${city}?`,
        a: `Yes, RTi Auto Locksmith may assist with selected ECU services in ${city}, depending on the vehicle make, model and control unit type.`
      },
      {
        q: `Do you offer ECU cloning in ${city}?`,
        a: `In selected cases, yes. ECU cloning availability depends on the vehicle system and the exact unit involved.`
      },
      {
        q: `Do you provide ECU remap support?`,
        a: `We may provide selected ECU remap support depending on the vehicle and the type of work required.`
      },
      {
        q: `Can ECU faults affect key or immobiliser systems?`,
        a: `Yes, some key and immobiliser problems may also involve ECU or module-related faults.`
      }
    ]
  },

  {
    name: "Mileage Correction",
    slug: "mileage-correction",
    shortName: "mileage correction",
    titleTemplate: (city) =>
      `Mileage Correction ${city} | Dashboard Calibration ${city} | RTi Auto Locksmith`,
    descriptionTemplate: (city) =>
      `Need mileage correction in ${city}? RTi Auto Locksmith provides selected mileage correction and dashboard calibration support where appropriate across ${city} and nearby areas.`,
    h1Template: (city) => `Mileage Correction ${city}`,
    introTemplate: (city) =>
      `RTi Auto Locksmith provides selected mileage correction and dashboard calibration support in ${city} where appropriate and legally permitted.`,
    bodyTemplate: (city) => `
<section class="section-fade-left">
  <h2>Dashboard Calibration in ${city}</h2>
  <p>
    Mileage correction and dashboard calibration may be relevant after instrument cluster replacement,
    ECU replacement or certain module changes. Availability depends on the vehicle make, model and dashboard system.
  </p>
</section>

<section class="section-fade-left">
  <h2>Selected Mileage Correction Support</h2>
  <p>
    RTi Auto Locksmith provides selected mileage correction support where appropriate and legally permitted.
    Contact us with full vehicle details so we can confirm whether assistance is available.
  </p>
</section>

<section class="section-fade-left">
  <h2>When Calibration May Be Needed</h2>
  <p>
    Calibration may be relevant after repairs, module replacement or instrument cluster changes where
    displayed values need to match correctly across the system.
  </p>
</section>

<section class="section-fade-left">
  <h2>Check Vehicle Compatibility First</h2>
  <p>
    Please send your vehicle make, model, year and the reason the calibration is required.
    This helps us confirm whether the system is supported.
  </p>
</section>
`,
    faqItems: (city) => [
      {
        q: `Do you provide mileage correction in ${city}?`,
        a: `RTi Auto Locksmith may provide selected mileage correction support in ${city} where appropriate and legally permitted.`
      },
      {
        q: `What is dashboard calibration?`,
        a: `Dashboard calibration may be relevant after cluster, ECU or module replacement where displayed values need to match correctly.`
      },
      {
        q: `Do all vehicles support mileage correction services?`,
        a: `No, availability depends on the vehicle make, model, dashboard system and the reason the work is required.`
      },
      {
        q: `Do you cover nearby areas around ${city} for dashboard calibration?`,
        a: `Yes, nearby towns and surrounding areas may also be covered depending on location and availability.`
      }
    ]
  },

  {
    name: "Training",
    slug: "training",
    shortName: "training",
    titleTemplate: (city) =>
      `Auto Locksmith Training ${city} | Practical Training ${city} | RTi Auto Locksmith`,
    descriptionTemplate: (city) =>
      `Looking for auto locksmith training near ${city}? RTi Auto Locksmith provides practical training and guidance based on real industry experience.`,
    h1Template: (city) => `Auto Locksmith Training ${city}`,
    introTemplate: (city) =>
      `RTi Auto Locksmith provides practical auto locksmith training and guidance for learners near ${city}, based on real industry experience.`,
    bodyTemplate: (city) => `
<section class="section-fade-left">
  <h2>Practical Auto Locksmith Training Near ${city}</h2>
  <p>
    We provide practical guidance and training support based on real-world industry work.
    Training enquiries are handled individually depending on experience level, goals and the
    areas you want to learn.
  </p>
</section>

<section class="section-fade-left">
  <h2>Beginner and Developing Skill Support</h2>
  <p>
    Whether you are new to the trade or looking to build on existing knowledge, contact us with
    details about your background and the specific skills you want to improve.
  </p>
</section>

<section class="section-fade-left">
  <h2>Areas That May Be Covered</h2>
  <p>
    Training support may include key-related work, programming principles, lock and ignition topics,
    diagnostic thinking and practical workflow based on real vehicle situations.
  </p>
</section>

<section class="section-fade-left">
  <h2>Send Your Enquiry</h2>
  <p>
    Please include your current experience level, what you want to learn and whether you are looking
    for beginner or more advanced guidance.
  </p>
</section>
`,
    faqItems: (city) => [
      {
        q: `Do you provide auto locksmith training near ${city}?`,
        a: `Yes, RTi Auto Locksmith provides practical training and guidance near ${city}, depending on availability and the type of support required.`
      },
      {
        q: `Is the training suitable for beginners?`,
        a: `Training enquiries are reviewed individually, and beginner support may be available depending on your goals and the topics you want to learn.`
      },
      {
        q: `What should I include in a training enquiry?`,
        a: `Please include your current experience level, what skills you want to learn and whether you are looking for beginner or advanced support.`
      },
      {
        q: `Do you cover practical industry-based learning?`,
        a: `Yes, the training is based on practical real-world experience and industry-related work.`
      }
    ]
  }
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function cityPageFilename(city) {
  return `${slugify(city)}-auto-locksmith.html`;
}

function serviceCityFilename(serviceSlug, city) {
  return `${serviceSlug}-${slugify(city)}.html`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function baseHead({ title, description, canonical }) {
  return `
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#FFCC00" />

  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="en-GB" href="${canonical}" />
  <link rel="alternate" hreflang="x-default" href="${canonical}" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />

  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>

  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="${siteUrl}/images/logo.png" />
  <meta property="og:image:alt" content="RTi Auto Locksmith logo" />
</head>`;
}

function locksmithSchema({ canonical, description, city }) {
  return `
<script type="application/ld+json">
${JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: "RTi Auto Locksmith",
    url: canonical,
    telephone: phoneHref,
    email,
    areaServed: {
      "@type": "City",
      name: city
    },
    image: `${siteUrl}/images/logo.png`,
    description
  },
  null,
  2
)}
</script>`;
}

function faqSchemaFromItems(items) {
  return `
<script type="application/ld+json">
${JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  },
  null,
  2
)}
</script>`;
}

function faqHtml(title, items) {
  return `
<section class="section-fade-left faq-section">
  <h2>${title}</h2>
  <div class="faq-list">
    ${items
      .map(
        (item) => `
    <details class="faq-item">
      <summary>${item.q}</summary>
      <p>${item.a}</p>
    </details>`
      )
      .join("")}
  </div>
</section>`;
}

function serviceLinksForCity(city, currentServiceSlug = null) {
  return services
    .filter((service) => service.slug !== currentServiceSlug)
    .map(
      (service) =>
        `<li><a href="/${serviceCityFilename(service.slug, city)}">${service.name} ${city}</a></li>`
    )
    .join("\n        ");
}

function cityFaqItems(city) {
  return [
    {
      q: `Do you provide auto locksmith services in ${city}?`,
      a: `Yes, RTi Auto Locksmith provides mobile auto locksmith support in ${city}, including car key replacement, key programming, ignition help and emergency vehicle access support.`
    },
    {
      q: `Do you cover nearby areas around ${city}?`,
      a: `Yes, nearby towns and surrounding areas may also be covered depending on distance and availability.`
    },
    {
      q: `Can you help with lost car keys in ${city}?`,
      a: `Yes, we may assist with lost car key replacement in ${city} for many makes and models, depending on the vehicle system.`
    },
    {
      q: `Do you also help with van keys, motorcycle keys and ECU-related issues in ${city}?`,
      a: `Yes, depending on the vehicle and system, RTi Auto Locksmith may also assist with selected van key services, motorcycle key support and ECU-related work in ${city}.`
    },
    {
      q: `What details should I give when I call?`,
      a: `Please provide your vehicle make, model, year, registration, postcode and a brief explanation of the issue so we can advise more accurately.`
    }
  ];
}

function cityPageTemplate(city) {
  const filename = cityPageFilename(city);
  const canonical = `${siteUrl}/${filename}`;
  const title = `${city} Auto Locksmith | Car Key Replacement ${city} | RTi Auto Locksmith`;
  const description = `Professional auto locksmith in ${city}. Car key replacement, car key programming, ignition repair, emergency unlocking, van key support, selected motorcycle key help and ECU services across ${city} and surrounding areas.`;
  const faqItems = cityFaqItems(city);

  return `<!DOCTYPE html>
<html lang="en">
${baseHead({ title, description, canonical }).replace(
  "</head>",
  `
  ${locksmithSchema({ canonical, description, city })}
  ${faqSchemaFromItems(faqItems)}
</head>`
)}
<body>
  <main class="city-page">
    <section class="hero city-hero">
      <div class="hero-logo">
        <img src="images/logo.png" alt="RTi Auto Locksmith Logo" class="logo-left" />
      </div>

      <h1>${city} Auto Locksmith</h1>
      <h2>24/7 Mobile Car Key Replacement, Programming and Emergency Unlocking in ${city}</h2>

      <p>
        RTi Auto Locksmith provides professional mobile auto locksmith services in ${city},
        including lost car key replacement, spare keys, programming and emergency vehicle access support.
      </p>

      <p>
        We also assist with ignition issues, selected van keys, selected motorcycle key help,
        ECU support and dashboard-related services depending on the vehicle system.
      </p>

      <p><strong>Call now:</strong> <a href="tel:${phoneHref}">${phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>

      <div class="cta-buttons">
        <a href="tel:${phoneHref}" class="btn primary-call">Call Now</a>
        <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn whatsapp-btn">WhatsApp Us</a>
      </div>
    </section>

    <section class="section-fade-left">
      <h2>Mobile Auto Locksmith Services in ${city}</h2>
      <p>
        We provide mobile support for lost car keys, spare keys, key programming, ignition faults,
        emergency vehicle unlocking and selected vehicle electronic support across ${city} and nearby areas.
      </p>
      <p>
        If you are searching online for an <strong>auto locksmith near me</strong>,
        <strong>car key replacement near me</strong> or <strong>mobile auto locksmith near me</strong>,
        RTi Auto Locksmith may be able to help depending on your location and vehicle details.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Services We May Provide in ${city}</h2>
      <ul class="nearby-links">
        <li>Car key replacement</li>
        <li>Spare car keys</li>
        <li>Car key programming</li>
        <li>Emergency vehicle unlocking</li>
        <li>Ignition repair support</li>
        <li>Van key replacement</li>
        <li>Selected motorcycle key assistance</li>
        <li>Selected ECU services</li>
        <li>Mileage correction and dashboard calibration support</li>
      </ul>
    </section>

    <section class="section-fade-left">
      <h2>Related Auto Locksmith Services in ${city}</h2>
      <ul class="nearby-links">
        ${serviceLinksForCity(city)}
      </ul>
    </section>

    ${faqHtml(`Frequently Asked Questions – Auto Locksmith ${city}`, faqItems)}

    <section class="section-fade-left contact-card">
      <h2>Contact RTi Auto Locksmith</h2>
      <p>If you need help in ${city}, contact RTi Auto Locksmith today.</p>

      <div class="contact-details">
        <p><span>Phone:</span> <a href="tel:${phoneHref}">${phone}</a></p>
        <p><span>Email:</span> <a href="mailto:${email}">${email}</a></p>
      </div>

      <div class="contact-actions">
        <a href="tel:${phoneHref}" class="btn primary-call">Call Now</a>
        <a href="/" class="back-link">Back to homepage</a>
      </div>
    </section>
  </main>
</body>
</html>`;
}

function serviceCityPageTemplate(city, service) {
  const filename = serviceCityFilename(service.slug, city);
  const canonical = `${siteUrl}/${filename}`;
  const title = service.titleTemplate(city);
  const description = service.descriptionTemplate(city);
  const cityPageUrl = `${siteUrl}/${cityPageFilename(city)}`;
  const faqItems = service.faqItems(city);

  return `<!DOCTYPE html>
<html lang="en">
${baseHead({ title, description, canonical }).replace(
  "</head>",
  `
  ${locksmithSchema({ canonical, description, city })}
  ${faqSchemaFromItems(faqItems)}
</head>`
)}
<body>
  <main class="city-page">
    <section class="hero city-hero">
      <div class="hero-logo">
        <img src="images/logo.png" alt="RTi Auto Locksmith Logo" class="logo-left" />
      </div>

      <h1>${service.h1Template(city)}</h1>
      <h2>24/7 Mobile Support from RTi Auto Locksmith</h2>

      <p>${service.introTemplate(city)}</p>

      <p>
        We provide mobile support across ${city} and nearby areas depending on location,
        vehicle type and current availability.
      </p>

      <p><strong>Call now:</strong> <a href="tel:${phoneHref}">${phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>

      <div class="cta-buttons">
        <a href="tel:${phoneHref}" class="btn primary-call">Call Now</a>
        <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn whatsapp-btn">WhatsApp Us</a>
      </div>
    </section>

    ${service.bodyTemplate(city)}

    <section class="section-fade-left">
      <h2>Areas Near ${city} We May Cover</h2>
      <p>
        RTi Auto Locksmith may also cover nearby towns and surrounding areas depending on
        location, distance and current availability. Contact us with your vehicle details
        and postcode to confirm coverage.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Other Services We May Provide in ${city}</h2>
      <ul class="nearby-links">
        ${serviceLinksForCity(city, service.slug)}
      </ul>
    </section>

    ${faqHtml(`Frequently Asked Questions – ${service.name} ${city}`, faqItems)}

    <section class="section-fade-left contact-card">
      <h2>Contact RTi Auto Locksmith</h2>
      <p>If you need ${service.shortName} in ${city}, contact RTi Auto Locksmith today.</p>

      <div class="contact-details">
        <p><span>Phone:</span> <a href="tel:${phoneHref}">${phone}</a></p>
        <p><span>Email:</span> <a href="mailto:${email}">${email}</a></p>
      </div>

      <div class="contact-actions">
        <a href="tel:${phoneHref}" class="btn primary-call">Call Now</a>
        <a href="${cityPageUrl}" class="back-link">Back to ${city} page</a>
      </div>
    </section>
  </main>
</body>
</html>`;
}

function locationsHubTemplate() {
  const cityLinks = cities
    .map((city) => `<li><a href="/${cityPageFilename(city)}">${city} Auto Locksmith</a></li>`)
    .join("\n        ");

  return `<!DOCTYPE html>
<html lang="en">
${baseHead({
  title: "Areas We Cover | RTi Auto Locksmith",
  description:
    "RTi Auto Locksmith provides mobile auto locksmith services across Liverpool, Manchester, Preston, Wigan, Bolton and many surrounding towns across the North West.",
  canonical: `${siteUrl}/locations.html`
}).replace(
  "</head>",
  `
  ${locksmithSchema({
    canonical: `${siteUrl}/locations.html`,
    description:
      "RTi Auto Locksmith provides mobile auto locksmith services across Liverpool, Manchester, Preston, Wigan, Bolton and many surrounding towns across the North West.",
    city: "North West England"
  })}
</head>`
)}
<body>
  <main class="locations-page">
    <section class="hero city-hero">
      <div class="hero-logo">
        <img src="images/logo.png" alt="RTi Auto Locksmith Logo" class="logo-left" />
      </div>

      <h1>Areas We Cover</h1>
      <p>
        RTi Auto Locksmith provides mobile auto locksmith services across Liverpool,
        Manchester, Preston, Wigan, Bolton and many surrounding towns across the North West.
      </p>
      <p>
        If you are not sure whether we cover your town, contact us with your postcode
        and vehicle details and we will confirm availability.
      </p>
    </section>

    <section class="section-fade-left">
      <h2>Auto Locksmith Locations</h2>
      <ul class="city-links">
        ${cityLinks}
      </ul>
    </section>
  </main>
</body>
</html>`;
}

function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];
  const urls = [];

  urls.push(`  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`);

  urls.push(`  <url>
    <loc>${siteUrl}/locations.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);

  cities.forEach((city) => {
    urls.push(`  <url>
    <loc>${siteUrl}/${cityPageFilename(city)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  cities.forEach((city) => {
    services.forEach((service) => {
      urls.push(`  <url>
    <loc>${siteUrl}/${serviceCityFilename(service.slug, city)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap, "utf8");
  console.log("Generated: sitemap.xml");
}

function generateCityPages() {
  cities.forEach((city) => {
    const filename = cityPageFilename(city);
    const content = cityPageTemplate(city);
    fs.writeFileSync(path.join(__dirname, filename), content, "utf8");
    console.log(`Generated city page: ${filename}`);
  });
}

function generateServiceCityPages() {
  cities.forEach((city) => {
    services.forEach((service) => {
      const filename = serviceCityFilename(service.slug, city);
      const content = serviceCityPageTemplate(city, service);
      fs.writeFileSync(path.join(__dirname, filename), content, "utf8");
      console.log(`Generated service page: ${filename}`);
    });
  });
}

function generateLocationsHub() {
  fs.writeFileSync(
    path.join(__dirname, "locations.html"),
    locationsHubTemplate(),
    "utf8"
  );
  console.log("Generated: locations.html");
}

generateCityPages();
generateServiceCityPages();
generateLocationsHub();
generateSitemap();