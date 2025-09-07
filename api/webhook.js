const { WebhookClient } = require("dialogflow-fulfillment");

module.exports = (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function welcome(agent) {
    agent.add("👋 أهلا! أنا SaveIt، مساعدك المالي. إزاي أقدر أساعدك النهاردة؟");
  }

  function fallback(agent) {
    agent.add("آسف، مش قادر أفهمك. ممكن تعيد سؤالك؟");
  }

  function expenseTracking(agent) {
    agent.add("📊 تقدر تسجل مصاريفك هنا، وتابعها بشكل دوري علشان تشوف إنت بتصرف إزاي.");
  }

  function savingTips(agent) {
    agent.add("💡 نصيحة: حاول تخصص 20% من دخلك للادخار، وابدأ بمبالغ صغيرة بانتظام.");
  }

  function budgetPlanning(agent) {
    agent.add("📝 للتخطيط المالي: استخدم قاعدة 50/30/20 (50% احتياجات – 30% رغبات – 20% ادخار).");
  }

  function debtManagement(agent) {
    agent.add("💳 حاول تسدد الديون ذات الفائدة العالية أولًا، وخلي خطة للسداد التدريجي.");
  }

  function emergencyFund(agent) {
    agent.add("🚑 من المهم يكون عندك صندوق طوارئ يغطي 3-6 شهور من مصاريفك الأساسية.");
  }

  function investingBasics(agent) {
    agent.add("📈 الاستثمار الأفضل هو طويل الأمد. ابدأ بصناديق المؤشرات أو الاستثمارات قليلة المخاطر.");
  }

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", welcome);
  intentMap.set("Default Fallback Intent", fallback);
  intentMap.set("ExpenseTracking", expenseTracking);
  intentMap.set("Saving Tips", savingTips);
  intentMap.set("BudgetPlanning", budgetPlanning);
  intentMap.set("DebtManagement", debtManagement);
  intentMap.set("EmergencyFund", emergencyFund);
  intentMap.set("InvestingBasics", investingBasics);

  agent.handleRequest(intentMap);
};
