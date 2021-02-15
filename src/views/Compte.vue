<template>
    <v-container>
			<v-row>
				<v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
					<div>
						<Compte />
					</div>
				</v-dialog>
			</v-row>
    </v-container>
</template>

<script>
import Compte from '../components/Compte.vue';

export default {
  name: "Compte",
  components: {
    Compte
  },
	data: () => ({
		dialog: true
	}),
};
</script>
