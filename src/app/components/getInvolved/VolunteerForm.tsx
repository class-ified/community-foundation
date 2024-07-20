'use client';

import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import Button from "@/components/Button";
import { CheckboxGroup } from "@/components/Checkbox";
import Input from "@/components/Input";
import Line from "@/components/Line";
import SelectMenu from "@/components/SelectMenu";

const validationSchema = Yup.object({
  full_name: Yup.string().required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email Address is required'),
  area_of_interest: Yup.string().required('Area of Interest is required'),
  days_available: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Please select at least one day')
    .required(),
  time_slots: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Please select at least one time slot')
    .required(),
  frequency: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Please select at least one frequency')
    .required(),
});

type VolunteerFormValuesType = Yup.InferType<typeof validationSchema>;

const isFieldRequired = (fieldName: keyof VolunteerFormValuesType) => {
  const fieldSchema = validationSchema.fields[fieldName];
  if (fieldSchema && fieldSchema.describe) {
    const description = fieldSchema.describe() as any;
    const tests = (description as any).tests as Array<{ name: string }>;
    return tests.some((test) => test.name === 'required');
  }
  return false;
};

const initialValues: VolunteerFormValuesType = {
  full_name: '',
  email: '',
  area_of_interest: '',
  days_available: [],
  time_slots: [],
  frequency: [],
};

const VolunteerForm = () => {
  const formik = useFormik<VolunteerFormValuesType>({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <h1 className="font-medium text-lg">Become a Volunteer</h1>

        <Line />

        <Input<VolunteerFormValuesType>
          type="text"
          label="Full Name"
          name="full_name"
          helper_text="Enter your full name"
          is_required={isFieldRequired('full_name')}
        />

        <Input<VolunteerFormValuesType>
          type="email"
          label="Email Address"
          name="email"
          helper_text="Enter your email address"
          is_required={isFieldRequired('email')}
        />

        <SelectMenu<VolunteerFormValuesType>
          label="Area of Interest"
          name="area_of_interest"
          helper_text="Select your area of interest"
          options={['Select Area', 'Education', 'Healthcare', 'Environment']}
          is_required={isFieldRequired('area_of_interest')}
        />

        <CheckboxGroup<VolunteerFormValuesType>
          name="days_available"
          label="Days Available"
          options={[
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ]}
          helper_text="Select the days you are available"
          is_required={isFieldRequired('days_available')}
        />

        <CheckboxGroup<VolunteerFormValuesType>
          name="time_slots"
          label="Time Slots"
          options={['Morning', 'Afternoon', 'Evening']}
          helper_text="Select the time slots you are available"
          is_required={isFieldRequired('time_slots')}
        />

        <CheckboxGroup<VolunteerFormValuesType>
          name="frequency"
          label="Frequency"
          options={[
            'One-time Events',
            'Weekly Commitment',
            'Flexible Schedule',
          ]}
          helper_text="Select the frequency you are available"
          is_required={isFieldRequired('frequency')}
        />

        <Line />

        <Button
          height="h-[62px]"
          bgColor="bg-green-medium"
          textColor="text-white"
          width="w-full"
          className="text-lg font-medium rounded-[8px]"
          aria-disabled={formik.isSubmitting}
          aria-busy={formik.isSubmitting}
          aria-live="polite"
        >
          Submit
        </Button>
      </form>
    </FormikProvider>
  );
};

export default VolunteerForm;
