"use client";
import {
  Button,
  DatePicker,
  FilterBar,
  FilterGroupItem,
  Input,
  Option,
  Select,
  Title,
} from "@ui5/webcomponents-react";

const Filter = () => {
  return (
    <FilterBar
      className="sap-content-paddings-container"
      filterContainerWidth="13.125rem"
      header={
        <Title level="H2" size="H4">
          FilterBar
        </Title>
      }
      // onAfterFiltersDialogOpen={function ks() {}}
      onClear={function ks() {}}
      onFiltersDialogCancel={function ks() {}}
      onFiltersDialogClose={function ks() {}}
      onFiltersDialogOpen={function ks() {}}
      onFiltersDialogSave={function ks() {}}
      onFiltersDialogSearch={function ks() {}}
      onFiltersDialogSelectionChange={function ks() {}}
      onGo={function ks() {}}
      onReorder={function ks() {}}
      onRestore={function ks() {}}
      onToggleFilters={function ks() {}}
      // search={<Input />}
      hideToolbar
      hideFilterConfiguration
      hideToggleFiltersButton
    >
      <FilterGroupItem filterKey="input" label="input">
        <Title>123456789</Title>
      </FilterGroupItem>
      <FilterGroupItem filterKey="input" label="input">
        <Title>123456789</Title>
      </FilterGroupItem>
      <FilterGroupItem filterKey="input" label="input">
        <Title>123456789</Title>
      </FilterGroupItem>
      <FilterGroupItem filterKey="input" label="input">
        <Title>123456789</Title>
      </FilterGroupItem>
      <FilterGroupItem filterKey="input" label="Contract Number">
        <Input placeholder="Placeholder Text" />
      </FilterGroupItem>
      <FilterGroupItem filterKey="input" label="Created On">
        <DatePicker />
      </FilterGroupItem>
      <FilterGroupItem filterKey="selectInitialSelected" label="Created By">
        <Select>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem filterKey="input" label="Customer Reference">
        <Input placeholder="Placeholder Text" />
      </FilterGroupItem>

      <Button design="Emphasized">Search</Button>
    </FilterBar>
  );
};

export default Filter;
