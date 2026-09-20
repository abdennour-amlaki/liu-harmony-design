(() => {
  "use strict";

  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const year = document.getElementById("year");
  const form = document.getElementById("projectForm");
  const status = document.getElementById("formStatus");

  const translations = {
    en: {
      "nav.work": "Work",
      "nav.services": "Services",
      "nav.studio": "Studio",
      "nav.process": "Process",
      "nav.contact": "Start a project",
      "hero.eyebrow": "INTERIOR DESIGN · DECORATION · VISUALIZATION",
      "hero.title": "Spaces with",
      "hero.titleEm": "quiet character.",
      "hero.text": "Thoughtful interiors shaped around light, material, proportion and the way people actually live.",
      "hero.cta.primary": "Explore our work",
      "hero.cta.secondary": "Start a conversation",
      "hero.stats.years": "Years of practice",
      "hero.stats.projects": "Projects delivered",
      "hero.stats.approach": "Tailored approach",
      "hero.note": "Bangkok · Phuket · London · Dubai · Paris · China",
      "hero.scroll": "Scroll to explore",
      "intro.eyebrow": "OUR APPROACH",
      "intro.heading": "Design that feels",
      "intro.headingEm": "considered.",
      "intro.text1": "Liu Harmony Design creates refined environments where architecture, furniture, lighting and materials work together naturally.",
      "intro.text2": "From private residences to hospitality and commercial spaces, every project is developed around its own identity rather than a predefined style.",
      "values.eyebrow": "WHY CLIENTS CHOOSE US",
      "values.heading": "Design with",
      "values.headingEm": "clarity.",
      "values.desc": "We create spaces that are visually refined, practical in daily use, and deeply aligned with the people who live or work in them.",
      "value1.title": "Tailored vision",
      "value1.text": "Every concept is built around your goals, your routine, and the character of the space itself.",
      "value2.title": "Material intelligence",
      "value2.text": "We balance texture, tone and function to create interiors that feel warm, elevated and enduring.",
      "value3.title": "Clear execution",
      "value3.text": "From first concept to final styling, we keep the process structured, collaborative and transparent.",
      "work.eyebrow": "SELECTED WORK",
      "work.heading": "Spaces we've",
      "work.headingEm": "shaped.",
      "work.desc": "A selection of concepts and interiors developed around atmosphere, functionality and timeless detail.",
      "filters.all": "All",
      "filters.residential": "Residential",
      "filters.hospitality": "Hospitality",
      "filters.commercial": "Commercial",
      "services.eyebrow": "WHAT WE DO",
      "services.heading": "From idea",
      "services.headingEm": "to atmosphere.",
      "services.desc": "A complete design approach combining creative direction, technical thinking and careful execution.",
      "service1.title": "Interior Design",
      "service1.text": "Space planning, concept development, materials, furniture and complete interior direction.",
      "service2.title": "Interior Decoration",
      "service2.text": "Furniture, lighting, accessories, textures and finishing details that give a space its personality.",
      "service3.title": "3D Visualization",
      "service3.text": "Realistic visualizations that help clients understand the atmosphere before construction begins.",
      "service4.title": "Project Coordination",
      "service4.text": "Coordinating design decisions, suppliers and project details to keep the final result aligned with the concept.",
      "studio.eyebrow": "THE STUDIO",
      "studio.heading": "Less noise.",
      "studio.headingEm": "More feeling.",
      "studio.text1": "We believe the most memorable interiors are not necessarily the loudest ones.",
      "studio.text2": "Our work focuses on proportion, natural materials, soft contrast and meaningful details — creating spaces that remain beautiful long after the first impression.",
      "studio.link": "Tell us about your space",
      "process.eyebrow": "OUR PROCESS",
      "process.heading": "Simple process.",
      "process.headingEm": "Thoughtful result.",
      "process1.title": "Discover",
      "process1.text": "We listen, understand the space and identify the project's priorities.",
      "process2.title": "Define",
      "process2.text": "We establish the concept, mood, materials and overall design direction.",
      "process3.title": "Develop",
      "process3.text": "Plans, selections and visualizations bring the concept into a clear design.",
      "process4.title": "Deliver",
      "process4.text": "We coordinate the final details so the design becomes a real, finished space.",
      "contact.eyebrow": "START A PROJECT",
      "contact.heading": "Have a space",
      "contact.headingEm": "in mind?",
      "contact.text": "Tell us a little about your project. We'll get back to you to discuss the next step.",
      "contact.name": "Your name *",
      "contact.phone": "Phone / WhatsApp *",
      "contact.type": "Project type",
      "contact.location": "Location",
      "contact.locationPlaceholder": "Bangkok / Phuket / London / Dubai / Paris / China",
      "contact.details": "Tell us about your project",
      "contact.detailsPlaceholder": "Space size, style, timeline, budget or anything else...",
      "contact.submit": "Send project enquiry",
      "contact.note": "Your enquiry will be sent securely to our team.",
      "form.sending": "Sending your message...",
      "form.success": "Message sent successfully! ✓",
      "form.error": "Unable to send message. Please try again.",
      "footer.tagline": "Interior design and decoration with quiet character.",
      "footer.contact": "Contact",
      "footer.location": "Bangkok · Phuket · London · Dubai · Paris · China",
      "project.typeResidential": "Residential",
      "project.typeHospitality": "Hospitality",
      "project.typeCommercial": "Commercial",
      "project.typeOther": "Other",
      "project.filterLabel": "Filter projects",
      "menu.open": "Open navigation",
      "menu.close": "Close navigation",
      "aria.lang": "Language switcher"
    },
    th: {
      "nav.work": "ผลงาน",
      "nav.services": "บริการ",
      "nav.studio": "สตูดิโอ",
      "nav.process": "กระบวนการ",
      "nav.contact": "เริ่มต้นโครงการ",
      "hero.eyebrow": "ออกแบบภายใน · ดีคอเรชั่น · วิชวลไลเซชัน",
      "hero.title": "พื้นที่ที่มี",
      "hero.titleEm": "บุคลิกที่เงียบสงบ.",
      "hero.text": "ภายในที่คำนึงถึงแสง วัสดุ สัดส่วน และวิธีใช้ชีวิตจริงของคนในพื้นที่",
      "hero.cta.primary": "สำรวจผลงาน",
      "hero.cta.secondary": "เริ่มต้นการสนทนา",
      "hero.stats.years": "ปีแห่งประสบการณ์",
      "hero.stats.projects": "โครงการที่แล้วเสร็จ",
      "hero.stats.approach": "วิธีการที่ปรับแต่งเฉพาะ",
      "hero.note": "กรุงเทพฯ · ภูเก็ต",
      "hero.scroll": "เลื่อนเพื่อสำรวจ",
      "intro.eyebrow": "แนวทางของเรา",
      "intro.heading": "การออกแบบที่รู้สึก",
      "intro.headingEm": "มีความคิด.",
      "intro.text1": "Liu Harmony Design สร้างสภาพแวดล้อมที่ประณีตซึ่งสถาปัตยกรรม เฟอร์นิเจอร์ แสง และวัสดุทำงานร่วมกันอย่างเป็นธรรมชาติ",
      "intro.text2": "ตั้งแต่บ้านพักส่วนตัวไปจนถึงพื้นที่โรงแรมและเชิงพาณิชย์ ทุกโครงการถูกพัฒนาตามเอกลักษณ์เฉพาะของพื้นที่แทนการยึดตามสไตล์ที่กำหนดไว้ล่วงหน้า",
      "values.eyebrow": "ทำไมลูกค้าถึงเลือกเรา",
      "values.heading": "ออกแบบด้วย",
      "values.headingEm": "ความชัดเจน.",
      "values.desc": "เราสร้างพื้นที่ที่มีความประณีตทั้งด้านภาพลักษณ์ ใช้งานจริง และสอดคล้องกับผู้ใช้พื้นที่ในทุกวัน",
      "value1.title": "วิสัยทัศน์เฉพาะตัว",
      "value1.text": "แนวคิดทุกอย่างถูกสร้างขึ้นจากเป้าหมาย กิจวัตรประจำวัน และลักษณะเฉพาะของพื้นที่",
      "value2.title": "ความชำนาญด้านวัสดุ",
      "value2.text": "เราสร้างสมดุลระหว่างพื้นผิว สี และการใช้งานเพื่อให้ภายในรู้สึกอบอุ่น เฉียบคม และยั่งยืน",
      "value3.title": "การดำเนินงานที่ชัดเจน",
      "value3.text": "จากแนวคิดแรกจนถึงการแต่งสไตล์สุดท้าย เราดูแลกระบวนการให้มีโครงสร้าง มีความร่วมมือ และโปร่งใส",
      "work.eyebrow": "ผลงานที่เลือกมา",
      "work.heading": "พื้นที่ที่เรา",
      "work.headingEm": "สร้างขึ้น.",
      "work.desc": "คอลเลกชันของแนวคิดและภายในที่พัฒนาขึ้นจากบรรยากาศ การใช้งาน และรายละเอียดที่คงทน",
      "filters.all": "ทั้งหมด",
      "filters.residential": "ที่พักอาศัย",
      "filters.hospitality": "บริการ",
      "filters.commercial": "เชิงพาณิชย์",
      "services.eyebrow": "เราทำอะไร",
      "services.heading": "จากไอเดีย",
      "services.headingEm": "สู่บรรยากาศ.",
      "services.desc": "แนวทางออกแบบแบบครบวงจรที่ผสมผสานความคิดสร้างสรรค์ การคิดเชิงเทคนิค และการปฏิบัติอย่างรอบคอบ",
      "service1.title": "ออกแบบภายใน",
      "service1.text": "การวางผัง การพัฒนาแนวคิด วัสดุ เฟอร์นิเจอร์ และการกำกับภายในแบบครบวงจร",
      "service2.title": "ตกแต่งภายใน",
      "service2.text": "เฟอร์นิเจอร์ ไฟส่องสว่าง อุปกรณ์เสริม เนื้อผ้า และรายละเอียดเสร็จสิ้นที่ทำให้พื้นที่มีบุคลิก",
      "service3.title": "ภาพ 3 มิติ",
      "service3.text": "ภาพจำลองที่มีความสมจริงเพื่อช่วยให้ลูกค้าเข้าใจบรรยากาศก่อนเริ่มก่อสร้าง",
      "service4.title": "ประสานงานโครงการ",
      "service4.text": "ประสานการตัดสินใจออกแบบ ซัพพลายเออร์ และรายละเอียดโครงการเพื่อให้ผลลัพธ์สุดท้ายสอดคล้องกับแนวคิด",
      "studio.eyebrow": "สตูดิโอ",
      "studio.heading": "เสียงรบกวนน้อยลง.",
      "studio.headingEm": "ความรู้สึกมากขึ้น.",
      "studio.text1": "เราเชื่อว่าภายในที่น่าจดจำไม่จำเป็นต้องดังที่สุดเสมอไป",
      "studio.text2": "งานของเราให้ความสำคัญกับสัดส่วน วัสดุธรรมชาติ ความคมชัดที่นุ่มนวล และรายละเอียดที่มีความหมาย เพื่อสร้างพื้นที่ที่สวยงามได้นานหลังจากประสบการณ์แรก",
      "studio.link": "บอกเล่าเกี่ยวกับพื้นที่ของคุณ",
      "process.eyebrow": "กระบวนการของเรา",
      "process.heading": "กระบวนการที่ง่าย.",
      "process.headingEm": "ผลลัพธ์ที่รอบคอบ.",
      "process1.title": "ค้นหา",
      "process1.text": "เราให้ความสนใจ ฟังความต้องการ และทำความเข้าใจพื้นที่เพื่อระบุความสำคัญของโครงการ",
      "process2.title": "กำหนด",
      "process2.text": "เราตั้งแนวคิด บรรยากาศ วัสดุ และทิศทางการออกแบบโดยรวม",
      "process3.title": "พัฒนา",
      "process3.text": "แผนการเลือกวัสดุและภาพจำลองนำแนวคิดสู่การออกแบบที่ชัดเจน",
      "process4.title": "ส่งมอบ",
      "process4.text": "เราประสานรายละเอียดสุดท้ายเพื่อให้การออกแบบกลายเป็นพื้นที่ที่สมบูรณ์จริง",
      "contact.eyebrow": "เริ่มต้นโครงการ",
      "contact.heading": "มีพื้นที่",
      "contact.headingEm": "ในใจไหม?",
      "contact.text": "บอกเล็กน้อยเกี่ยวกับโครงการของคุณ เราจะติดต่อกลับเพื่อหารือขั้นตอนต่อไป",
      "contact.name": "ชื่อของคุณ *",
      "contact.phone": "โทรศัพท์ / WhatsApp *",
      "contact.type": "ประเภทโครงการ",
      "contact.location": "สถานที่",
      "contact.locationPlaceholder": "กรุงเทพฯ ภูเก็ต...",
      "contact.details": "เล่าเกี่ยวกับโครงการของคุณ",
      "contact.detailsPlaceholder": "ขนาดพื้นที่ สไตล์ กำหนดเวลา งบประมาณ หรือรายละเอียดอื่น ๆ ...",
      "contact.submit": "ส่งคำขอโครงการ",
      "contact.note": "ข้อมูลของคุณจะถูกส่งไปยังทีมงานอย่างปลอดภัย",
      "form.sending": "กำลังส่งข้อความ...",
      "form.success": "ส่งข้อความสำเร็จ! ✓",
      "form.error": "ไม่สามารถส่งข้อความได้ กรุณาลองอีกครั้ง",
      "footer.tagline": "การออกแบบภายในและการตกแต่งที่มีบุคลิกเงียบสงบ",
      "footer.contact": "ติดต่อ",
      "footer.location": "กรุงเทพฯ · ภูเก็ต",
      "project.typeResidential": "ที่พักอาศัย",
      "project.typeHospitality": "บริการ",
      "project.typeCommercial": "เชิงพาณิชย์",
      "project.typeOther": "อื่น ๆ",
      "project.filterLabel": "กรองผลงาน",
      "menu.open": "เปิดเมนู",
      "menu.close": "ปิดเมนู",
      "aria.lang": "สลับภาษา"
    },
    ar: {
      "nav.work": "الأعمال",
      "nav.services": "الخدمات",
      "nav.studio": "الاستوديو",
      "nav.process": "العملية",
      "nav.contact": "ابدأ مشروعك",
      "hero.eyebrow": "تصميم داخلي · ديكور · تصيير",
      "hero.title": "مساحات ب",
      "hero.titleEm": "طابع هادئ.",
      "hero.text": "تصاميم داخلية مدروسة حول الضوء والمواد والنسب وطريقة عيش الناس فعليًا.",
      "hero.cta.primary": "استكشف أعمالنا",
      "hero.cta.secondary": "ابدأ محادثة",
      "hero.stats.years": "سنوات من الخبرة",
      "hero.stats.projects": "مشاريع منجزة",
      "hero.stats.approach": "نهج مخصص",
      "hero.note": "بانكوك · بوكيت",
      "hero.scroll": "مرر للاستكشاف",
      "intro.eyebrow": "نهجنا",
      "intro.heading": "تصميم يشعر بـ",
      "intro.headingEm": "التأمل.",
      "intro.text1": "تخلق Liu Harmony Design بيئات دقيقة تعمل فيها الهندسة والأثاث والإضاءة والمواد معًا بشكل طبيعي.",
      "intro.text2": "من المنازل الخاصة إلى الفنادق والمناطق التجارية، يتم تطوير كل مشروع حول هويته الخاصة وليس بأسلوب محدد مسبقًا.",
      "values.eyebrow": "لماذا يختار العملاءنا",
      "values.heading": "تصميم مع",
      "values.headingEm": "وضوح.",
      "values.desc": "نخلق مساحات أنيقة بصريًا وعملية يوميًا ومتوافقة بعمق مع الأشخاص الذين يعيشون أو يعملون فيها.",
      "value1.title": "رؤية مخصصة",
      "value1.text": "يتم بناء كل مفهوم حول أهدافك وروتينك وطابع المساحة نفسها.",
      "value2.title": "ذكاء المواد",
      "value2.text": "نوازن بين القوام والألوان والوظيفة لإنشاء Interior feel دافئ وعالي الجودة ودائم.",
      "value3.title": "تنفيذ واضح",
      "value3.text": "من المفهوم الأول إلى التزيين النهائي، نحافظ على العملية منظمة وتعاونية وشفافة.",
      "work.eyebrow": "أعمال مختارة",
      "work.heading": "المساحات التي",
      "work.headingEm": "شكلناها.",
      "work.desc": "مجموعة مختارة من المفاهيم والواجهات تم تطويرها حول الأجواء والوظيفة والتفاصيل الخالدة.",
      "filters.all": "الكل",
      "filters.residential": "سكني",
      "filters.hospitality": "ضيافة",
      "filters.commercial": "تجاري",
      "services.eyebrow": "ماذا نفعل",
      "services.heading": "من الفكرة",
      "services.headingEm": "إلى الجو.",
      "services.desc": "نهج تصميم كامل يجمع بين التوجيه الإبداعي والتفكير التقني والتنفيذ الدقيق.",
      "service1.title": "تصميم داخلي",
      "service1.text": "تخطيط المساحات، تطوير المفاهيم، المواد، الأثاث والتوجيه الداخلي الكامل.",
      "service2.title": "ديكور داخلي",
      "service2.text": "الأثاث والإضاءة والإكسسوارات والنسيج والتفاصيل النهائية التي تمنح المساحة شخصيتها.",
      "service3.title": "تصيير ثلاثي الأبعاد",
      "service3.text": "تجسيدات واقعية تساعد العملاء على فهم الجو قبل بدء البناء.",
      "service4.title": "تنسيق المشروع",
      "service4.text": "تنسيق قرارات التصميم والمورّدين وتفاصيل المشروع للحفاظ على التناسق النهائي مع المفهوم.",
      "studio.eyebrow": "الاستوديو",
      "studio.heading": "أقل ضوضاء.",
      "studio.headingEm": "أكثر إحساس.",
      "studio.text1": "نؤمن أن أكثر المساحات تذكرًا ليست بالضرورة الأكثر صخبًا.",
      "studio.text2": "يركز عملنا على النسب والمواد الطبيعية والتباين اللطيف والتفاصيل المعنوية — لخلق مساحات جميلة لفترة طويلة بعد الانطباع الأول.",
      "studio.link": "أخبرنا عن مساحتك",
      "process.eyebrow": "عملية العمل",
      "process.heading": "عملية بسيطة.",
      "process.headingEm": "نتيجة مدروسة.",
      "process1.title": "الاكتشاف",
      "process1.text": "نستمع، نفهم المساحة ونحدد أولويات المشروع.",
      "process2.title": "التعريف",
      "process2.text": "نضع المفهوم والجو والمواد واتجاه التصميم العام.",
      "process3.title": "التطوير",
      "process3.text": "تُجلب الخطط والاختيارات والتصورات إلى تصميم واضح.",
      "process4.title": "التسليم",
      "process4.text": "ننسق التفاصيل النهائية حتى يصبح التصميم مساحة حقيقية جاهزة.",
      "contact.eyebrow": "ابدأ مشروعك",
      "contact.heading": "هل لديك مساحة",
      "contact.headingEm": "في ذهنك؟",
      "contact.text": "أخبرنا قليلاً عن مشروعك. سنعود إليك لمناقشة الخطوة التالية.",
      "contact.name": "اسمك *",
      "contact.phone": "الهاتف / واتساب *",
      "contact.type": "نوع المشروع",
      "contact.location": "الموقع",
      "contact.locationPlaceholder": "بانكوك، بوكيت...",
      "contact.details": "أخبرنا عن مشروعك",
      "contact.detailsPlaceholder": "حجم المساحة، الأسلوب، الجدول الزمني، الميزانية أو أي شيء آخر...",
      "contact.submit": "إرسال طلب المشروع",
      "contact.note": "سيتم إرسال استفسارك بأمان إلى فريقنا.",
      "form.sending": "جارٍ إرسال رسالتك...",
      "form.success": "تم إرسال الرسالة بنجاح! ✓",
      "form.error": "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      "footer.tagline": "تصميم داخلي وديكور بطابع هادئ.",
      "footer.contact": "التواصل",
      "footer.location": "بانكوك · بوكيت",
      "project.typeResidential": "سكني",
      "project.typeHospitality": "ضيافة",
      "project.typeCommercial": "تجاري",
      "project.typeOther": "أخرى",
      "project.filterLabel": "تصفية المشاريع",
      "menu.open": "فتح القائمة",
      "menu.close": "إغلاق القائمة",
      "aria.lang": "مبدل اللغة"
    },
    zh: {
      "nav.work": "作品",
      "nav.services": "服务",
      "nav.studio": "工作室",
      "nav.process": "流程",
      "nav.contact": "开始项目",
      "hero.eyebrow": "室内设计 · 装修 · 可视化",
      "hero.title": "带着",
      "hero.titleEm": "安静的气质。",
      "hero.text": "围绕光线、材料、比例和人们真实生活方式而设计的深思熟虑空间。",
      "hero.cta.primary": "探索我们的作品",
      "hero.cta.secondary": "开始交流",
      "hero.stats.years": "实践年限",
      "hero.stats.projects": "已完成项目",
      "hero.stats.approach": "量身定制方案",
      "hero.note": "曼谷 · 普吉岛",
      "hero.scroll": "滚动浏览",
      "intro.eyebrow": "我们的理念",
      "intro.heading": "让设计感受到",
      "intro.headingEm": "用心。",
      "intro.text1": "Liu Harmony Design 创造精致的空间，让建筑、家具、照明和材料自然地协同工作。",
      "intro.text2": "从私人住宅到酒店及商业空间，每个项目都围绕其独特身份展开，而不是依赖既定风格。",
      "values.eyebrow": "为什么客户选择我们",
      "values.heading": "以",
      "values.headingEm": "清晰设计。",
      "values.desc": "我们打造视觉精致、日常实用，并与居住或工作者深度契合的空间。",
      "value1.title": "量身定制的愿景",
      "value1.text": "每个概念都围绕你的目标、日常节奏与空间本身的特质来构建。",
      "value2.title": "材料洞察",
      "value2.text": "我们平衡质地、色调与功能，创造温暖、提升感与耐久性的室内空间。",
      "value3.title": "清晰执行",
      "value3.text": "从最初概念到最终陈设，我们保持流程有序、协作紧密并保持透明。",
      "work.eyebrow": "精选作品",
      "work.heading": "我们塑造的",
      "work.headingEm": "空间。",
      "work.desc": "一组围绕氛围、功能和永恒细节而开发的概念与室内设计精选。",
      "filters.all": "全部",
      "filters.residential": "住宅",
      "filters.hospitality": "酒店",
      "filters.commercial": "商业",
      "services.eyebrow": "我们所做",
      "services.heading": "从构思",
      "services.headingEm": "到氛围。",
      "services.desc": "结合创意指导、技术思维和细致执行的完整设计方案。",
      "service1.title": "室内设计",
      "service1.text": "空间规划、概念开发、材料、家具及完整室内设计指导。",
      "service2.title": "室内装饰",
      "service2.text": "家具、照明、配饰、材质和细节处理，赋予空间独特个性。",
      "service3.title": "3D 可视化",
      "service3.text": "逼真的可视化方案，帮助客户在施工前理解空间氛围。",
      "service4.title": "项目协调",
      "service4.text": "协调设计决策、供应商和项目细节，确保最终效果与概念一致。",
      "studio.eyebrow": "工作室",
      "studio.heading": "少些喧闹。",
      "studio.headingEm": "多些感受。",
      "studio.text1": "我们相信，最难忘的室内空间未必是最吵闹的。",
      "studio.text2": "我们的作品聚焦比例、天然材料、柔和对比和有意义的细节——创造在初印象之后仍然美丽的空间。",
      "studio.link": "告诉我们你的空间",
      "process.eyebrow": "我们的流程",
      "process.heading": "流程简洁。",
      "process.headingEm": "成果细致。",
      "process1.title": "发现",
      "process1.text": "我们倾听、了解空间并明确项目的优先事项。",
      "process2.title": "定义",
      "process2.text": "我们确立概念、氛围、材料与整体设计方向。",
      "process3.title": "发展",
      "process3.text": "平面图、选材和可视化方案将概念转化为清晰的设计。",
      "process4.title": "交付",
      "process4.text": "我们协调最终细节，让设计成为真实完成的空间。",
      "contact.eyebrow": "开始项目",
      "contact.heading": "有一个你考虑中的",
      "contact.headingEm": "空间吗？",
      "contact.text": "告诉我们一点关于你的项目。我们会联系你，讨论下一步。",
      "contact.name": "你的名字 *",
      "contact.phone": "电话 / WhatsApp *",
      "contact.type": "项目类型",
      "contact.location": "地点",
      "contact.locationPlaceholder": "曼谷、普吉岛...",
      "contact.details": "告诉我们你的项目",
      "contact.detailsPlaceholder": "空间面积、风格、时间表、预算或其他信息...",
      "contact.submit": "发送项目咨询",
      "contact.note": "你的咨询将被安全发送给我们的团队。",
      "form.sending": "正在发送您的消息...",
      "form.success": "消息发送成功！✓",
      "form.error": "无法发送消息，请重试。",
      "footer.tagline": "带有安静气质的室内设计与装饰。",
      "footer.contact": "联系",
      "footer.location": "曼谷 · 普吉岛",
      "project.typeResidential": "住宅",
      "project.typeHospitality": "酒店",
      "project.typeCommercial": "商业",
      "project.typeOther": "其他",
      "project.filterLabel": "筛选项目",
      "menu.open": "打开菜单",
      "menu.close": "关闭菜单",
      "aria.lang": "语言切换"
    }
  };

  const languageButtons = document.querySelectorAll(".lang-btn");
  const themeToggle = document.getElementById("themeToggle");
  const defaultLanguage = "en";

  const getTranslation = (lang, key) => translations[lang]?.[key] || translations[defaultLanguage][key] || key;
  const contactEndpoint = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/api/contacts"
    : "/api/contacts";

  const applyTheme = (theme) => {
    const resolvedTheme = theme === "dark" ? "dark" : "light";
    document.body.classList.toggle("theme-dark", resolvedTheme === "dark");
    if (themeToggle) {
      const isDark = resolvedTheme === "dark";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute("aria-label", isDark ? "Enable light mode" : "Enable dark mode");
      themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
      themeToggle.querySelector(".theme-toggle-icon")?.replaceChildren(isDark ? "☀" : "☾");
    }
    localStorage.setItem("liu-theme", resolvedTheme);
  };

  themeToggle?.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(nextTheme);
  });

  const applyLanguage = (lang) => {
    const activeLang = translations[lang] ? lang : defaultLanguage;
    document.documentElement.lang = activeLang;
    document.body.dir = activeLang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = activeLang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      const value = getTranslation(activeLang, key);
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      const key = element.dataset.i18nPlaceholder;
      const value = getTranslation(activeLang, key);
      if (value) element.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-label]").forEach(element => {
      const key = element.dataset.i18nLabel;
      const value = getTranslation(activeLang, key);
      if (value) element.textContent = value;
    });

    languageButtons.forEach(button => {
      const isActive = button.dataset.lang === activeLang;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("liu-language", activeLang);

    const menuLabel = mainNav?.classList.contains("open")
      ? getTranslation(activeLang, "menu.close")
      : getTranslation(activeLang, "menu.open");
    menuToggle?.setAttribute("aria-label", menuLabel);

    if (status) {
      const currentStatus = status.dataset.default || status.textContent.trim();
      if (!status.dataset.default) {
        status.dataset.default = currentStatus || "";
      }
    }
  };

  languageButtons.forEach(button => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  const savedLanguage = localStorage.getItem("liu-language");
  applyLanguage(savedLanguage || defaultLanguage);

  const savedTheme = localStorage.getItem("liu-theme");
  applyTheme(savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 30);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    mainNav?.classList.remove("open");
    menuToggle?.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", getTranslation(document.documentElement.lang || defaultLanguage, "menu.open"));
    document.body.classList.remove("menu-open");
  };

  menuToggle?.addEventListener("click", () => {
    const open = !mainNav.classList.contains("open");

    mainNav.classList.toggle("open", open);
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open
        ? getTranslation(document.documentElement.lang || defaultLanguage, "menu.close")
        : getTranslation(document.documentElement.lang || defaultLanguage, "menu.open")
    );

    document.body.classList.toggle("menu-open", open);
  });

  mainNav?.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", closeMenu)
  );

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => {
        const active = btn === button;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", String(active));
      });

      cards.forEach(card => {
        const show =
          filter === "all" || card.dataset.category === filter;

        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px"
      }
    );

    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add("visible"));
  }

  // Contact form
  form?.addEventListener("submit", async event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const projectType = String(data.get("projectType") || "").trim();
    const location = String(data.get("location") || "").trim();
    const message = String(data.get("details") || "").trim();

    if (status) {
      status.textContent = getTranslation(document.documentElement.lang || defaultLanguage, "form.sending");
    }

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          projectType: projectType,
          location: location,
          message: message
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      if (status) {
        status.textContent = getTranslation(document.documentElement.lang || defaultLanguage, "form.success");
      }

      form.reset();

    } catch (error) {
      console.error(error);

      if (status) {
        status.textContent = getTranslation(document.documentElement.lang || defaultLanguage, "form.error");
      }
    }
  });
})();