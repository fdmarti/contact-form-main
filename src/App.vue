<template>
  <div class="card-form">
    <SuccessSentMessage v-if="showSuccessMessage"/>
    <h1>Contact Us</h1>
    <form @submit.prevent="handleSubmit">
      <BlockGroupForm>
        <section class="block-input">
          <label for="first-name">First Name <MandatoryFieldIcon /></label>
          <input
            type="text"
            id="first-name"
            v-model="formData.firstName"
            :class="error.firstName && 'error'"
          />
          <span v-if="error.firstName" class="error-message">{{ error.firstName }}</span>
        </section>
        <section class="block-input">
          <label for="last-name">Last Name <MandatoryFieldIcon /></label>
          <input
            type="text"
            id="last-name"
            v-model="formData.lastName"
            :class="error.lastName && 'error'"
          />
          <span v-if="error.lastName" class="error-message">{{ error.lastName }}</span>
        </section>
      </BlockGroupForm>
      <BlockGroupForm>
        <section class="block-input">
          <label for="email">Email Address <MandatoryFieldIcon /></label>
          <input type="email" id="email" v-model="formData.email" :class="error.email && 'error'" />
          <span v-if="error.email" class="error-message">{{ error.email }}</span>
        </section>
      </BlockGroupForm>
      <BlockGroupForm>
        <section class="block-input">
          <label for="general-enquiry">Query Type <MandatoryFieldIcon /></label>
          <div class="radio-block">
            <div class="radio-inputs">
              <input
                type="radio"
                name="query-type"
                value="general-enquiry"
                v-model="formData.queryType"
                id="general-enquiry"
              />
              <label for="general-enquiry"><span>General Enquiry</span></label>
            </div>
            <div class="radio-inputs">
              <input
                type="radio"
                name="query-type"
                value="support-request"
                v-model="formData.queryType"
                id="support-request"
              />
              <label for="support-request"><span>Support Request</span></label>
            </div>
          </div>
          <span v-if="error.queryType" class="error-message">{{ error.queryType }}</span>
        </section>
      </BlockGroupForm>
      <BlockGroupForm>
        <section class="block-input">
          <label for="message">Message <MandatoryFieldIcon /></label>
          <textarea
            name="message"
            id="message"
            rows="6"
            :class="error.message && 'error'"
            v-model="formData.message"
          ></textarea>
          <span v-if="error.message" class="error-message">{{ error.message }}</span>
        </section>
      </BlockGroupForm>
      <BlockGroupForm>
        <section class="block-input">
          <input
            type="checkbox"
            class="check-box-consent"
            id="consent"
            name="consent"
            v-model="formData.concent"
          />

          <label for="consent" class="consent-label"
            >I consent to being contacted by the team <MandatoryFieldIcon
          /></label>
          <span v-if="error.concent" class="error-message concept">{{ error.concent }}</span>
        </section>
      </BlockGroupForm>
      <SubmitButton />
    </form>
  </div>
</template>

<script setup lang="ts">
import MandatoryFieldIcon from '@/components/MandatoryFieldIcon.vue';
import BlockGroupForm from '@/components/BlockGroupForm.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import SuccessSentMessage from '@/components/SuccessSentMessage.vue';

import { useForm } from '@/composables/useForm';
const { formData, handleSubmit, error, showSuccessMessage } = useForm();
</script>
