import { reactive, ref } from 'vue';
import type { Form } from '@/interface/Form';
import { regularExps } from '@/const/regular-expr';

export const useForm = () => {
	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		queryType: '',
		message: '',
		concent: false
	};

	const formData = reactive<Form>({ ...initialState });
	const showSuccessMessage = ref<boolean>(false);

	const error = reactive({
		firstName: '',
		lastName: '',
		email: '',
		queryType: '',
		message: '',
		concent: '',
		amountErrors: 0
	});

	const handleSubmit = () => {
		error.amountErrors = 0;

		const validations = [
			{ field: 'firstName', message: 'The first name is required' },
			{ field: 'lastName', message: 'The last name is required' },
			{
				field: 'email',
				message: 'The email is required',
				regex: regularExps.email,
				invalidMessage: 'The email is not valid'
			},
			{ field: 'queryType', message: 'You must select a Query Type' },
			{ field: 'message', message: 'The message field is required' },
			{ field: 'concent', message: 'To submit this form, please consent to being contacted.' }
		];

		validations.forEach(({ field, message, regex, invalidMessage }) => {
			const fieldName = formData[field as keyof Form];
			if (!fieldName) {
				error[field as keyof Form] = message;
				error.amountErrors++;
			} else if (regex && !regex.test(fieldName as string)) {
				error[field as keyof Form] = invalidMessage;
				error.amountErrors++;
			} else {
				error[field as keyof Form] = '';
			}
		});

		if (error.amountErrors > 0) {
			return;
		}

		Object.assign(formData, initialState);
		showSuccessMessage.value = true;
		setTimeout(() => {
			showSuccessMessage.value = false;
		}, 3000);
	};

	return {
		formData,
		error,
		showSuccessMessage,

		handleSubmit
	};
};
