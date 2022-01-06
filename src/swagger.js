
const swagger = {
  "/api/version": {
    get: {
      operationId: "WebServerAppController_getVersion",
      parameters: [],
      responses: {
        200: {
          description: "Version and build date information",
        },
      },
    },
  },
  "/api/groups/register": {
    post: {
      operationId: "GroupsController_create",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ExtendedGroupDto",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Group added",
        },
        400: {
          description: "Error",
        },
      },
      tags: ["groups"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/groups": {
    get: {
      operationId: "GroupsController_findAll",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["groups"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/groups/{id}": {
    get: {
      operationId: "GroupsController_findOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["groups"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      operationId: "GroupsController_update",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ExtendedGroupDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record modified",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["groups"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "GroupsController_remove",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["groups"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/users/login": {
    post: {
      operationId: "UsersController_login",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserLoginDto",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Login granted",
        },
        400: {
          description: "Missing credentials",
        },
        403: {
          description: "Unauthorized",
        },
        409: {
          description: "Database error",
        },
        422: {
          description: "Database error",
        },
      },
      tags: ["users"],
    },
  },
  "/api/users/logout": {
    post: {
      operationId: "UsersController_logout",
      parameters: [],
      responses: {
        200: {
          description: "Logout success",
        },
      },
      tags: ["users"],
    },
  },
  "/api/users": {
    get: {
      operationId: "UsersController_findAll",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["users"],
      security: [
        {
          cookie: [],
        },
      ],
    },
  },
  "/api/users/profile": {
    get: {
      operationId: "UsersController_findProfile",
      parameters: [],
      responses: {
        200: {
          description: "Profile of logged in user",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["users"],
    },
  },
  "/api/users/{id}": {
    get: {
      operationId: "UsersController_find",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["users"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      operationId: "UsersController_update",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserUpdateDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record modified",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["users"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "UsersController_remove",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["users"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/users/register": {
    post: {
      operationId: "UsersController_register",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserDto",
            },
          },
        },
      },
      responses: {
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["users"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/users/changePassword": {
    post: {
      operationId: "UsersController_changePassword",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserPasswordChangeDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Password changed",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["users"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/devices": {
    post: {
      operationId: "DevicesController_logEntry",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DeviceDto",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Device added",
        },
        400: {
          description: "Device add failed",
        },
        500: {
          description: "Mongo error",
        },
      },
      tags: ["devices"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    get: {
      operationId: "DevicesController_findAll",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
        500: {
          description: "Mongo error",
        },
      },
      tags: ["devices"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/devices/actual": {
    get: {
      operationId: "DevicesController_getActualDevices",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["devices"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/devices/actual/{uniqueId}": {
    delete: {
      operationId: "DevicesController_removeFromActualDevices",
      parameters: [
        {
          name: "uniqueId",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        400: {
          description: "Invalid Object Id",
        },
        401: {
          description: "Unauthorized",
        },
        404: {
          description: "Not Found",
        },
        500: {
          description: "Mongo error",
        },
        503: {
          description: "User has no access for this device",
        },
      },
      tags: ["devices"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/devices/{id}": {
    get: {
      operationId: "DevicesController_findOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        400: {
          description: "Invalid Object Id",
        },
        401: {
          description: "Unauthorized",
        },
        404: {
          description: "Not Found",
        },
        500: {
          description: "Mongo error",
        },
        503: {
          description: "User has no access for this device",
        },
      },
      tags: ["devices"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      operationId: "DevicesController_update",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DeviceDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record modified",
        },
        400: {
          description: "Invalid Dto param, Invalid Object Id",
        },
        401: {
          description: "Unauthorized",
        },
        404: {
          description: "Not Found",
        },
        500: {
          description: "Mongo error",
        },
        503: {
          description: "User has no access for this device",
        },
      },
      tags: ["devices"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "DevicesController_remove",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        400: {
          description: "Invalid Object Id",
        },
        401: {
          description: "Unauthorized",
        },
        404: {
          description: "Not Found",
        },
        500: {
          description: "Mongo error",
        },
        503: {
          description: "User has no access for this device",
        },
      },
      tags: ["devices"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/dashboard": {
    get: {
      operationId: "DashboardController_test",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["dashboard"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/measurements": {
    get: {
      operationId: "MeasurementsController_findAll",
      parameters: [],
      responses: {
        200: {
          description: "",
        },
      },
      tags: ["measurements"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/measurements/{id}": {
    get: {
      operationId: "MeasurementsController_findOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["measurements"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      operationId: "MeasurementsController_updateOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/MeasurementsUpdateDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["measurements"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/alerts": {
    post: {
      operationId: "AlertsController_createAlert",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AlertDto",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Alert added",
        },
        400: {
          description: "Bad request",
        },
      },
      tags: ["alerts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    get: {
      operationId: "AlertsController_findAll",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["alerts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/alerts/{id}": {
    get: {
      operationId: "AlertsController_findOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["alerts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      operationId: "AlertsController_update",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AlertDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record modified",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["alerts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    patch: {
      operationId: "AlertsController_partialUpdate",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PartialUpdateAlertDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record modified",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["alerts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "AlertsController_remove",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["alerts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/widget-configs": {
    post: {
      operationId: "WidgetConfigController_createWidgetConfig",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/WidgetConfigDto",
            },
          },
        },
      },
      responses: {
        201: {
          description: "WidgetConfig added",
        },
        400: {
          description: "Bad request",
        },
      },
      tags: ["widget-configs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    get: {
      operationId: "WidgetConfigController_findAll",
      parameters: [
        {
          name: "page",
          required: true,
          in: "query",
          schema: {
            type: "string",
          },
        },
        {
          name: "dashboard",
          required: true,
          in: "query",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["widget-configs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/widget-configs/{id}": {
    get: {
      operationId: "WidgetConfigController_findOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["widget-configs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      operationId: "WidgetConfigController_update",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/WidgetConfigDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record modified",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["widget-configs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "WidgetConfigController_remove",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["widget-configs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/notifications": {
    post: {
      operationId: "NotificationsController_createNotification",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/NotificationDto",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Notification added",
        },
        400: {
          description: "Bad request",
        },
      },
      tags: ["notifications"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    get: {
      operationId: "NotificationsController_findAll",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["notifications"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/notifications/{id}": {
    get: {
      operationId: "NotificationsController_findOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["notifications"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      operationId: "NotificationsController_update",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/NotificationDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record modified",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["notifications"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "NotificationsController_remove",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["notifications"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  }, 
  "/api/settings": {
    post: {
      operationId: "SettingsController_createNotification",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/SettingDto",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Setting added",
        },
        400: {
          description: "Bad request",
        },
      },
      tags: ["settings"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    get: {
      operationId: "SettingsController_findAll",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["settings"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/settings/{id}": {
    get: {
      operationId: "SettingsController_findOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["settings"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      operationId: "SettingsController_update",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/SettingDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record modified",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["settings"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "SettingsController_remove",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["settings"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/logs": {
    get: {
      operationId: "LogsController_download",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["logs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/logs/data/{id}": {
    get: {
      operationId: "LogsController_findFile",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["logs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "LogsController_delete",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["logs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/logs/{id}": {
    get: {
      operationId: "LogsController_findOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["logs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "LogsController_remove",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["logs"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/dictionaries": {
    get: {
      operationId: "DictionariesController_findAll",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
        500: {
          description: "Mongo error",
        },
      },
      tags: ["dictionaries"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/shifts": {
    post: {
      operationId: "ShiftsController_createNotification",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ShiftDto",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Setting added",
        },
        400: {
          description: "Bad request",
        },
      },
      tags: ["shifts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    get: {
      operationId: "ShiftsController_findAll",
      parameters: [],
      responses: {
        200: {
          description: "Array of all records",
        },
      },
      tags: ["shifts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/api/shifts/{id}": {
    get: {
      operationId: "ShiftsController_findOne",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "The found record",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["shifts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      operationId: "ShiftsController_update",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ShiftDto",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record modified",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["shifts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      operationId: "ShiftsController_remove",
      parameters: [
        {
          name: "id",
          required: true,
          in: "path",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        401: {
          description: "Unauthorized",
        },
      },
      tags: ["shifts"],
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
};

module.exports = swagger;