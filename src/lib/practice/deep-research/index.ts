const threshold = {
  llmCalls: 5,
  tokens: 10000,
};

class DeepResearch {
  private llmCalls: number;
  private tokensUsed: number;
  private thoughts: string[];

  constructor() {
    this.llmCalls = 0;
    this.tokensUsed = 0;
    this.thoughts = [];
  }

  async needMoreInfo(): Promise<boolean> {
    const callLLmForInfo: Promise<boolean> = new Promise((resolve) => {
      setTimeout(() => {
        console.log("Checking if I need more info or not.");
        resolve(true);
        this.thoughts.push("I have decided I need more Info.");
      }, 1000);
    });
    return callLLmForInfo;
  }

  async shouldStop(): Promise<boolean> {
    if (this.llmCalls >= threshold.llmCalls) {
      this.thoughts.push(
        "I have to stop research. I have cross the request threshold."
      );
      return true;
    }

    if (this.tokensUsed >= 10000) {
      this.thoughts.push(
        "I have to stop research. I have cross the token threshold."
      );
      return true;
    }

    if (await !this.needMoreInfo()) {
      this.thoughts.push(
        "I have to stop research. I don't need any more information."
      );

      return true;
    }

    return false;
  }

  async callLLm(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.llmCalls++;
        this.tokensUsed += 1000;
        this.thoughts.push(
          "I have decided to call LLm one more time. Total Count:" +
            this.llmCalls
        );
        resolve("Data: dummy data from call number:" + this.llmCalls);
      }, 500); // 500ms delay
    });
  }

  async generateAnswer() {
    this.thoughts.push("I will now generate answer.");
    return "dummy answer";
  }

  async runResearch() {
    const plan = {
      objective: "",
      steps: [],
    };

    while (!(await this.shouldStop())) {
      const result = await this.callLLm();
      this.thoughts.push(result);
      console.log(result);
    }

    const answer = await this.generateAnswer();
    return {
      calls: this.llmCalls,
      tokens: this.tokensUsed,
      thoughts: this.thoughts,
      answer,
    };
  }
}

export const deepResearch = new DeepResearch();

/**
 * If I do this I can loop over the steps but this will just be a workflow, not agentic looping.
 *
 * So I think I need to find a different way
 * The plan needs to be dynamic
 *
 * Take one step, evaluate, add next step
 * One path at all stages would be to stop
 *
 * # Boundary conditions
 * I think there is a need for boundary conditions.
 *
 * Start
 * Should i start with a plan or should I just go with an objective
 * and do bayesian collection of information
 *
 * End
 * Once the loop stops abruptly, there might not be a enough time
 * to collect all the learnings or to synthesize them,
 * or to bring the loop to a conclusion.
 *
 */
/**
 * Bayesian Agent Algorithm:
 *
 * 1. Initialize belief state:
 *    beliefState = initializeBeliefState(objective)
 * 2. Prepare empty evidence and history arrays:
 *    evidence = []
 *    history = []
 *
 * 3. Loop until stopping criterion:
 *    while not shouldStop(beliefState, evidence):
 *      a. Select next step:
 *         nextStep = selectNextStep(beliefState, objective, evidence, history)
 *      b. Record history:
 *         history.push(nextStep)
 *      c. Execute step:
 *         observation = await executeStep(nextStep)
 *      d. Record evidence:
 *         evidence.push({ step: nextStep, observation })
 *      e. Update belief state:
 *         beliefState = await updateBelief(beliefState, nextStep, observation, objective, evidence)
 *
 * 4. Return trace object:
 *    return { objective, history, evidence }
 */
