<template>
  <div id="ManageCategory">
    <v-app>
      <v-main>
        <dashboardLayout />
        <v-container>
          <v-row class="m-0">
            <v-col md="12" cols="12" class=" ">
              <!-- DATA TABLE -->
              <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                sort-by="calories"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>MANAGE CATEGORY</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>

                    <!-- search box -->
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                      class="mr-4"
                    ></v-text-field>

                    <!-- CRUD form -->
                    <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          class="mb-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon small>mdi-plus-circle-outline</v-icon>
                          <span class="ml-2">ADD CATEGORY</span>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <!-- FORM -->
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                  v-model="editedItem.category"
                                  label="CATEGORY TITLE"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="close">
                            Cancel
                          </v-btn>
                          <v-btn color="blue darken-1" text @click="save">
                            Save
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <!-- delete dialog -->
                    <v-dialog v-model="dialogDelete" max-width="500px">
                      <v-card>
                        <v-card-title class="headline">
                          Are you sure you want to delete this item?
                        </v-card-title>
                        <v-card-text
                          >Deleting a product will permently remove from the
                          system. click on yes if you wish you delete
                          it</v-card-text
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="closeDelete"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            color="red darken-1"
                            text
                            @click="deleteItemConfirm"
                          >
                            Delete
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>

                <!-- action panel -->
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteItem(item)">
                    mdi-delete
                  </v-icon>
                </template>

                <!-- reset when no data -->
                <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize">
                    Reset
                  </v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import dashboardLayout from "../../components/adminLayout";
export default {
  name: "ManageCategory",
  components: {
    dashboardLayout,
  },
  data: () => ({
    search: "",

    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Ref #",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Category title", value: "category" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New CATEGORY" : "Edit CATEGORY";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          id: "1",
          category: "    Mobile accessories",
        },
        {
          id: "2",
          category: "Computer accessories",
        },
        {
          id: "3",
          category: "Health and Beauty",
        },
        {
          id: "4",
          category: "Men's Clothing",
        },
        {
          id: "5",
          category: "Women's Clothing",
        },
        {
          id: "6",
          category: "Mes's Accessories",
        },
        {
          id: "7",
          category: "Women's Accessories",
        },
        {
          id: "8",
          category: "24 Hours Essentials",
        },
        {
          id: "9",
          category: "Sport Equipments",
        },
        {
          id: "10",
          category: "Kitchen Equipments",
        },
        {
          id: "11",
          category: "Shoes & Bags",
        },
        {
          id: "12",
          category: "Wrist watches",
        },
        {
          id: "13",
          category: "Electoronics",
        },
        {
          id: "14",
          category: "Gift & Packs",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style></style>
