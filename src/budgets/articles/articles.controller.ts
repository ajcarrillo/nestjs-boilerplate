import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common"
import { ArticlesService } from "./articles.service"
import { CreateArticleDto, UpdateArticleDto } from "./dto"

@Controller("articles")
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
  ) {
  }

  @Get()
  findAll() {
    return this.articlesService.findAll()
  }

  @Post()
  create(
    @Body() createArticleDto: CreateArticleDto,
  ) {
    return this.articlesService.create(createArticleDto)
  }

  @Get("dictionary")
  getDictionary() {
    return this.articlesService.getDictionary()
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.update(+id, updateArticleDto)
  }
}
