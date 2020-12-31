import { Component } from "react";
import {
  Banner,
  Frame,
  Toast,
  Card,
  DisplayText,
  Form,
  FormLayout,
  Page,
  PageActions,
  TextField,
  Layout
} from "@shopify/polaris";
import store from "store-js";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const UPDATE_PRICE = gql`
  mutation productVariantUpdate($input: ProductVariantInput!) {
    productVariantUpdate(input: $input) {
      product {
        title
      }
      productVariant {
        id
        price
      }
    }
  }
`;

class EditProduct extends Component {
  state = {
    discount: "",
    price: "",
    variantId: "",
    showToast: false
  };

  itemToBeConsumed = () => {
    const item = store.get("item");
    const price = item.variants.edges[0].node.price;
    const variantId = item.variants.edges[0].node.id;
    const discounter = price * 0.1;
    this.setState({ price, variantId });
    return (price - discounter).toFixed(2);
  };

  handleChange = field => {
    return value => this.setState({ [field]: value });
  };

  componentDidMount() {
    this.setState({ discount: this.itemToBeConsumed() });
  }

  render() {
    const { name, discount, price, variantId } = this.state;
    return (
      <Mutation mutation={UPDATE_PRICE}>
        {(handleSubmit, { error, data }) => {
          const showError = error && (
            <Banner status='critical'>{error.message}</Banner>
          );
          const showToast = data && data.productVariantUpdate && (
            <Toast
              content='Successfully updated'
              onDismiss={() => this.setState({ showToast: false })}
            />
          );
          return (
            <Frame>
              <Page>
                <Layout>
                  {showToast}
                  <Layout.Section>{showError}</Layout.Section>
                  <Layout.Section>
                    <DisplayText size='large'>{name}</DisplayText>
                    <Form>
                      <Card sectioned>
                        <FormLayout>
                          <FormLayout.Group>
                            <TextField
                              prefix='$'
                              value={price}
                              disabled={true}
                              label='Original Price'
                              type='price'
                            />
                            <TextField
                              prefix='$'
                              value={discount}
                              onChange={this.handleChange("discount")}
                              label='Discounted Price'
                              type='discount'
                            />
                          </FormLayout.Group>
                          <p>This sale price will expire in 2 weeks</p>
                        </FormLayout>
                      </Card>
                      <PageActions
                        primaryAction={[
                          {
                            content: "Save",
                            onAction: () => {
                              const productVariableInput = {
                                id: variantId,
                                price: discount
                              };
                              handleSubmit({
                                variables: { input: productVariableInput }
                              });
                            }
                          }
                        ]}
                        secondaryActions={[
                          {
                            content: "Remove discount"
                          }
                        ]}
                      />
                    </Form>
                  </Layout.Section>
                </Layout>
              </Page>
            </Frame>
          );
        }}
      </Mutation>
    );
  }
}

export default EditProduct;
