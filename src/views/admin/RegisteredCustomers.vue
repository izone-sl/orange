<template>
  <div id="RegisteredCustomers">
    <v-app>
      <v-main>
        <dashboardLayout />
        <v-container>
          <v-row class="m-0">
            <v-col md="12" cols="12" class=" ">
              <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                sort-by="calories"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>CONSUMERS</v-toolbar-title>
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
                    <!-- <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          class="mb-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          New Item
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.name"
                                  label="Dessert name"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.calories"
                                  label="Calories"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.fat"
                                  label="Fat (g)"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.carbs"
                                  label="Carbs (g)"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.protein"
                                  label="Protein (g)"
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

                    <v-dialog v-model="dialogDelete" max-width="500px">
                      <v-card>
                        <v-card-title class="headline"
                          >Are you sure you want to delete this
                          item?</v-card-title
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="closeDelete"
                            >Cancel</v-btn
                          >
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="deleteItemConfirm"
                            >OK</v-btn
                          >
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-dialog> -->
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteItem(item)">
                    mdi-delete
                  </v-icon>
                </template>
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
  name: "RegisteredCustomers",
  components: {
    dashboardLayout,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Ref #",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Phone", value: "phone" },
        { text: "Address", value: "address" },
        { text: "Email", value: "email" },
        { text: "Registered Date", value: "regdate" },
        // { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
    };
  },
  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          id: 1,
          name: "Aaqil",
          phone: "94777654321",
          address: "Bulugohatenna",
          email: "aaqil@gmail.com",
          regdate: "10-10-2020",
        },
        {
          id: 2,
          name: "Raza",
          phone: "94777123456",
          address: "Kurugoda",
          email: "raza@gmail.com",
          regdate: "10-10-2020",
        },
        {
          id: 3,
          name: "Rifky",
          phone: "94777852963",
          address: "Bulugohatenna",
          email: "rifky@gmail.com",
          regdate: "10-10-2020",
        },
      ];
    },
  },
};
</script>

<style></style>
