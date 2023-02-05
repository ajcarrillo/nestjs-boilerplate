import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Article } from "../entities"
import { Repository } from "typeorm"
import { CreateArticleDto, UpdateArticleDto } from "./dto"

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {
  }

  async findAll() {
    return await this.articleRepository.find()
  }

  async create(createArticleDto: CreateArticleDto) {
    const article = this.articleRepository.create(createArticleDto)

    return await this.articleRepository.save(article)
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const { ...article } = updateArticleDto

    const articleToUpdate = await this.articleRepository.preload({
      id,
      ...article,
    })

    if (!articleToUpdate) {
      throw new NotFoundException(`El artículo con el id ${id} no existe`)
    }

    return await this.articleRepository.save(articleToUpdate)
  }
}
