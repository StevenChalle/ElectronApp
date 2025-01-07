<template>
    <v-row
        align="center"
        style="height: 90vh;"
    >
        <v-col
            v-if="image"
            cols="12"
            class="d-flex justify-center"
        >
            <div class="d-flex flex-column align-center">
                <!-- V IMG Localhost -->
                <!-- <v-img
                    :src="`http://localhost:8100/image?name=${image.name}&frame=${frameIndex - 1}`"
                    height="85vh"
                /> -->

                <!-- IMG Localhost -->
                <!-- <img
                    v-if="editorMode"
                    :src="`http://localhost:8100/image?name=${image.name}&frame=${frameIndex - 1}&compression_level=${compressionLevel}&viewport_dimensions=${viewportDimensions}`"  
                />
                <img
                    v-else
                    id="image"
                    :src="`http://localhost:8100/image?name=${image.name}&frame=${frameIndex - 1}&compression_level=10&viewport_dimensions=${viewportDimensions}`"
                > -->

                <!-- IMG NAS -->
                <img
                    v-if="editorMode"
                    :src="`http://home.damae-medical.com:8100/image?name=${image.name}&frame=${frameIndex - 1}&compression_level=${compressionLevel}&viewport_dimensions=${viewportDimensions}`"  
                />
                <img
                    v-else
                    id="image"
                    :src="`http://home.damae-medical.com:8100/image?name=${image.name}&frame=${frameIndex - 1}&compression_level=15&viewport_dimensions=${viewportDimensions}`"
                >

                <v-slider
                    v-if="image.frameCount !== 1"
                    v-model="frameIndex"
                    width="700"
                    thumb-label="always"
                    :min="1"
                    :max="image.frameCount"
                    step="1"
                />
                <v-checkbox
                    v-model="editorMode"
                    color="yellow"
                    label="Editor Mode"
                ></v-checkbox>
                <!-- <h1>Ines Saumon d'amour de ma vie</h1> -->
                <div v-if="editorMode">
                    <v-select
                        v-model="viewportDimensions"
                        width="200"
                        density="compact"
                        label="Viewport Dimensions"
                        :items="['800x400', '1100x700', '1490x860', '1920x1080']"
                    ></v-select>
                    <v-select
                        v-model="compressionLevel"
                        width="200"
                        density="compact"
                        label="Compression Level"
                        :items="Array.from({ length: 100 }, (_, i) => i + 1)"
                    ></v-select>
                </div>
            </div>

        </v-col>
    </v-row>
</template>

<script lang="ts" src="./Viewer.ts" />