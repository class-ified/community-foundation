import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import Button from "@/components/Button";
import { CheckboxGroup } from "@/components/Checkbox";
import Input from "@/components/Input";
import Line from "@/components/Line";
import RadioGroup from "@/components/Radio";
import SelectMenu from "@/components/SelectMenu";

const validation_schema = Yup.object({
  donation_frequency: Yup.string().required('Frequency is required'),
  donation_cause: Yup.string().required('Donation Cause is required'),
  amount: Yup.number()
    .min(1, 'Amount must be at least 1')
    .required('Amount is required'),
  card_holder_name: Yup.string().required('Card Holder Name is required'),
  card_number: Yup.string().required('Card Number is required'),
  expiry_date: Yup.string().required('Expiry Date is required'),
  cvv: Yup.string().required('CVV is required'),
  join_community: Yup.array().of(Yup.string().required()).required(),
});

type DonateNowFormValuesType = Yup.InferType<typeof validation_schema>;

const isFieldRequired = (fieldName: keyof DonateNowFormValuesType) => {
  const fieldSchema = validation_schema.fields[fieldName];
  if (fieldSchema && fieldSchema.describe) {
    const description = fieldSchema.describe() as any;
    const tests = (description as any).tests as Array<{ name: string }>;
    return tests.some((test) => test.name === 'required');
  }
  return false;
};

const initial_values: DonateNowFormValuesType = {
  donation_frequency: '',
  donation_cause: '',
  amount: 0,
  card_holder_name: '',
  card_number: '',
  expiry_date: '',
  cvv: '',
  join_community: [],
};

const DonateNowForm = () => {
  const formik = useFormik<DonateNowFormValuesType>({
    initialValues: initial_values,
    validationSchema: validation_schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validateOnChange: true,
  });

  const handleCardNumberInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    function cardNumberFormat(value: string) {
      value = value.replace(/\D/g, '');
      const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, ''),
        matches = v.match(/\d{4,16}/g),
        match = (matches && matches[0]) || '',
        parts = [];
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      if (parts.length) {
        return parts.join(' ');
      } else {
        return value;
      }
    }
    formik.setFieldValue('card_number', cardNumberFormat(e.target.value));
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <h1 className="font-medium text-lg">Donate Now</h1>

        <Line />

        <RadioGroup<DonateNowFormValuesType>
          name="donation_frequency"
          label="Donation Frequency"
          helper_text="Select a donation frequency"
          options={['One time', 'Monthly', 'Annually']}
          is_required={isFieldRequired('donation_frequency')}
        />

        <SelectMenu<DonateNowFormValuesType>
          name="donation_cause"
          label="Donation Cause"
          helper_text="Select the cause you want to donate for"
          options={[
            '',
            'Nourishing lives with food and fruit',
            'Clothing hope and dignity',
            'Healing minds, Restoring hope',
            'Empowering minds through education',
          ]}
          is_required={isFieldRequired('donation_cause')}
        />

        <Input<DonateNowFormValuesType>
          type="number"
          label="Choose Amount"
          helper_text="Choose amount you'd like to donate"
          name="amount"
          is_required={isFieldRequired('amount')}
        />

        <Input<DonateNowFormValuesType>
          type="text"
          label="Card Holder Name"
          helper_text="Input the name on your card"
          name="card_holder_name"
          is_required={isFieldRequired('card_holder_name')}
        />

        <div className="flex gap-3 w-full">
          <Input<DonateNowFormValuesType>
            type="text"
            label="Card Number"
            helper_text="Input the number on your card"
            name="card_number"
            handleChange={handleCardNumberInputChange}
            width="w-[15rem]"
            is_required={isFieldRequired('card_number')}
          />

          <Input<DonateNowFormValuesType>
            type="text"
            label="Expiry Date"
            helper_text="Input the expiry date on your card"
            name="expiry_date"
            width="w-[8.25rem]"
            is_required={isFieldRequired('expiry_date')}
          />

          <Input<DonateNowFormValuesType>
            type="number"
            label="CVV"
            helper_text="Input the CVV on your card"
            name="cvv"
            width="w-[7.875rem]"
            is_required={isFieldRequired('cvv')}
          />
        </div>

        <CheckboxGroup<DonateNowFormValuesType>
          label=""
          name="join_community"
          helper_text="Join the community to get updates on our work"
          options={['Join community']}
          is_required={isFieldRequired('join_community')}
        />

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

export default DonateNowForm;
