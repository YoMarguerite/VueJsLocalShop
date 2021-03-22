<template>
  <v-container class="mt-1">
    <v-row>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>FAQ</v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="questionInput"
                  label="Saisissez une question."
                  :error="errorInput"
                  error-message="Cette question existe déjà ..."
                ></v-text-field>
              </v-col>
              <v-col sm="2">
                <v-btn color="primary" @click="newQuestion()">
                  Valider
                </v-btn>
              </v-col>
            </v-row>

            <v-expansion-panels v-show="questions.length > 0">
              <v-expansion-panel
                v-for="question in questions"
                :key="question.value"
              >
                <v-expansion-panel-header>
                  {{ question.value }}
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="responseInput"
                        label="Saisissez une réponse à la question."
                        :error="errorResponseInput"
                        error-message="Cette réponse existe déjà ..."
                      ></v-text-field>
                    </v-col>
                    <v-col sm="2">
                      <v-btn color="primary" @click="newResponse(question)">
                        Valider
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-card>
                    <v-card-title>
                      Réponses :
                    </v-card-title>
                    <v-card-text
                      v-for="response in question.responses"
                      :key="response"
                    >
                      {{ response }}
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Details",
  props: {
    id: Number
  },
  data: () => ({
    questionInput: "",
    errorInput: false,
    responseInput: "",
    errorResponseInput: false,
    questions: []
  }),
  mounted() {
    let storage = localStorage[this.id + "Question"];
    if (!storage) {
      localStorage[this.id + "Question"] = JSON.stringify([]);
    }
    this.questions = JSON.parse(storage);
  },
  methods: {
    checkQuestion() {
      let question = this.questions.find(question => {
        return question.value === this.questionInput;
      });
      this.errorInput = question !== undefined;
    },
    newQuestion() {
      this.checkQuestion();
      if (!this.errorInput) {
        this.questions.push({
          value: this.questionInput,
          responses: []
        });
        localStorage[this.id + "Question"] = JSON.stringify(this.questions);
      }
    },
    checkResponse(question) {
      let response = question.responses.find(response => {
        return response === this.responseInput;
      });
      this.errorResponseInput = response !== undefined;
    },
    newResponse(question) {
      this.checkResponse(question);
      if (!this.errorResponseInput) {
        question.responses.push(this.responseInput);
        localStorage[this.id + "Question"] = JSON.stringify(this.questions);
      }
    }
  }
};
</script>
